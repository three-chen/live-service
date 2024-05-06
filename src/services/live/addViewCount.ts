import type { AddViewCountR } from '../../data'
import type R from '../../data/R'
import { post } from '../../sigletonAxios'

export const addViewCount = (liveId: string): Promise<R<AddViewCountR>> => {
  return post(`/live/addview/${liveId}`)
}
