import type { FollowCountR } from '../../data'
import type R from '../../data/R'
import { get } from '../../sigletonAxios'

export const getFollowCount = (followerId: string): Promise<R<FollowCountR>> => {
  return get(`/follow/followcount/${followerId}`)
}
