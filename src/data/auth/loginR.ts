import type AuthR from './authR'

export interface LoginR {
  /**
   * 用户id
   */
  id: string
  /**
   * 用户名
   */
  name: string
  /**
   * 用户邮箱
   */
  email: string
  /**
   * jwt
   */
  token: string
  /**
   * 用户权限
   */
  auth: AuthR
  /**
   * 用户头像url
   * */
  avatar: string
}
