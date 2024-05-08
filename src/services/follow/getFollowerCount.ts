import type { FollowerCountR } from '../../data'
import type R from '../../data/R'
import { get } from '../../sigletonAxios'

export const getFollowerCount = (userId: string): Promise<R<FollowerCountR>> => {
  return get(`/follow/followercount/${userId}`)
}
