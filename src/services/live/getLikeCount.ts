import type { AddLikeCountR } from '../../data'
import type R from '../../data/R'
import { get } from '../../sigletonAxios'

export const getLikeCount = (liveId: string): Promise<R<AddLikeCountR>> => {
  return get(`/live/getlike/${liveId}`)
}
