import type { UserInfoR } from '../../data'
import type R from '../../data/R'
import { get } from '../../sigletonAxios'

export const getUserInfo = (userId: string): Promise<R<UserInfoR>> => {
  return get(`/users/${userId}`)
}
