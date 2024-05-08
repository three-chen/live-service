import type { FollowInfo, FollowInfoR } from '../../data'
import type R from '../../data/R'
import { post } from '../../sigletonAxios'

export const canselFollow = (followInfo: FollowInfo): Promise<R<FollowInfoR>> => {
  return post(`/follow/cancel`, followInfo)
}
