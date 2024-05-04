import type R from '../../data/R'
import type { LoginInfo } from '../../data/auth/LoginInfo'
import type { LoginR } from '../../data/auth/loginR'
import { post } from '../../sigletonAxios'

export const postLoginInfo = (loginInfo: LoginInfo): Promise<R<LoginR>> => {
  return post('/auth/login', loginInfo)
}
