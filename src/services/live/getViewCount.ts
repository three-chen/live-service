import type { AddLikeCountR, AddViewCountR } from '../../data'
import type R from '../../data/R'
import { get } from '../../sigletonAxios'

export const getViewCount = (liveId: string): Promise<R<AddViewCountR>> => {
  return get(`/live/getview/${liveId}`)
}
