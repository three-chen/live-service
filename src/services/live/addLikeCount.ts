import type { AddLikeCountR } from '../../data'
import type R from '../../data/R'
import { post } from '../../sigletonAxios'

export const addLikeCount = (liveId: string): Promise<R<AddLikeCountR>> => {
  return post(`/live/addlike/${liveId}`)
}
