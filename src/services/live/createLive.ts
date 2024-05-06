import type { LiveInfo, LiveInfoR } from '../../data'
import type R from '../../data/R'
import { post } from '../../sigletonAxios'

export const createLive = (liveInfo: LiveInfo): Promise<R<LiveInfoR>> => {
  return post(`/live/create`, liveInfo)
}
