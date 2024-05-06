import R from '../../data/R'

import type VerifyInfo from '../../data/postImg/verifyInfo'
import type VerifyR from '../../data/postImg/verifyR'
import { postVerifyInfo } from './postVerify'

import type MergeInfo from '../../data/postImg/mergeInfo'
import type MergeR from '../../data/postImg/mergeR'
import { postMergeInfo } from './postMerge'

import type { ChunkInfo } from '../../data/postImg/chunkInfo'
import type ChunkR from '../../data/postImg/chunkR'
import { postChunkInfo } from './postChunk'
/**
 *
 * @param file
 * @param path 'cover' || 'avatar'
 * @param size
 * @returns
 */
async function uploadImgToServer(file: Blob, path: string, size = 1024 * 1024): Promise<string> {
  const chunks = chunkFile(file, size)
  const imgtype = file.type
  const hash = await createHash(chunks)

  return new Promise((resolve, reject) => {
    verifyUpload(hash, path).then((res: VerifyR) => {
      if (res.exist) {
        console.log('文件秒传')
        resolve(res.filePath!)
      } else {
        const uploadedChunksIndex = res.index
        const chunksNeedUpload = chunks.map((value, index) => {
          if (uploadedChunksIndex!.indexOf(String(index)) !== -1) {
            return null
          }
          return value
        })
        console.log(chunksNeedUpload)
        uploadChunks(chunksNeedUpload, hash, path).then(res => {
          console.log(res)
          mergeImg(hash, imgtype, size, path).then(res => {
            console.log('图片地址为：', res.url)
            resolve(res.url)
          })
        })
      }
    })
  })
}

function createHash(chunks: Blob[]): Promise<string> {
  return new Promise(resolve => {
    const worker = new Worker('/worker/worker.js')
    worker.postMessage(chunks)
    worker.onmessage = function (e) {
      resolve(e.data)
    }
  })
}

function verifyUpload(hash: string, path: string): Promise<VerifyR> {
  return new Promise(resolve => {
    const verifyInfo: VerifyInfo = { hash: hash }
    postVerifyInfo(verifyInfo, path).then((res: R<VerifyR>) => {
      resolve(res.data as VerifyR)
    })
  })
}

/**
 *
 * @param {Blob} file 文件
 * @param {number} size 分块大小 默认1M
 * @returns {Blob[]} 分块信息
 */
function chunkFile(file: Blob, size = 1024 * 1024) {
  const chunkList = []
  let cur = 0
  while (cur * size < file.size) {
    chunkList.push(file.slice(cur * size, (cur + 1) * size))
    cur++
  }
  return chunkList
}

/**
 *
 * @param {Blob[]} chunks
 * @param {string} hash
 * @param {string} path
 */
function uploadChunks(chunks: (Blob | null)[], hash: string, path: string) {
  const promises = []
  for (let index = 0; index < chunks.length; index++) {
    if (chunks[index] !== null) {
      const formData = new FormData()
      const freader = new FileReader()

      promises.push(
        new Promise((resolve, reject) => {
          // 为 FileReader 设置 onload 事件处理程序来处理数据加载完成时的情况
          freader.onload = function (event) {
            // 获取切片数据
            const chunkData = event.target!.result

            formData.append('chunk', new Blob([chunkData!])) // 重新包装成 Blob
            formData.append('hash', hash)
            formData.append('index', hash + '_' + index)

            const chunkInfo: ChunkInfo = formData
            postChunkInfo(chunkInfo, path).then((res: R<ChunkR>) => {
              resolve(res.data as ChunkR)
            })
          }
        })
      )

      // 读取切片数据
      freader.readAsArrayBuffer(chunks[index]!)
    }
  }

  return Promise.all(promises)
}

function mergeImg(hash: string, imgtype: string, size: number, path: string): Promise<MergeR> {
  return new Promise((resolve, reject) => {
    const mergeInfo: MergeInfo = {
      hash: hash,
      imgtype: imgtype,
      chunkSize: size
    }
    postMergeInfo(mergeInfo, path).then((res: R<MergeR>) => {
      resolve(res.data as MergeR)
    })
  })
}

export { uploadImgToServer }
