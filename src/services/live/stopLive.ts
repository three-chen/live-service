import type { LiveInfoR } from '../../data'
import type R from '../../data/R'
import { post } from '../../sigletonAxios'

export const stopLive = (liveId: string): Promise<R<LiveInfoR>> => {
  return post(`/live/stop/${liveId}`)
}
