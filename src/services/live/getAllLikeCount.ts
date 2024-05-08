import type { AddLikeCountR } from '../../data'
import type R from '../../data/R'
import { get } from '../../sigletonAxios'

export const getAllLikeCount = (userId: string): Promise<R<AddLikeCountR>> => {
  return get(`/live/getalllike/${userId}`)
}
