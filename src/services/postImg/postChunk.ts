import type R from '../../data/R'
import type { ChunkInfo } from '../../data/postImg/chunkInfo'
import type ChunkR from '../../data/postImg/chunkR'
import { post } from '../../sigletonAxios'

export const postChunkInfo = (ChunkInfo: ChunkInfo, path: string): Promise<R<ChunkR>> => {
  return post(`/uploadimg/${path}/chunk`, ChunkInfo, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
