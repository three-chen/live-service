import type { LiveInfo, LiveInfoR } from '../../data'
import type R from '../../data/R'
import { post } from '../../sigletonAxios'

export const postLiveInfo = (liveId: string, liveInfo: Partial<LiveInfo>): Promise<R<LiveInfoR>> => {
  return post(`/live/update/${liveId}`, liveInfo)
}
