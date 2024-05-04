import type R from '@/service/data/R'
import type { ChunkInfo } from '@/service/data/postImg/chunkInfo'
import type ChunkR from '@/service/data/postImg/chunkR'
import { post } from '@/service/sigletonAxios'

export const postChunkInfo = (ChunkInfo: ChunkInfo): Promise<R<ChunkR>> => {
  return post('/webrtcchat/chunk', ChunkInfo, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
