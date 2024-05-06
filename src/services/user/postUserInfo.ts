import type { UserInfo, UserInfoR } from '../../data'
import type R from '../../data/R'
import { post } from '../../sigletonAxios'

export const postUserInfo = (id: string, update: Partial<UserInfo>): Promise<R<UserInfoR>> => {
  return post(`/users/${id}`, update)
}
