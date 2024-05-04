import type AuthR from './authR'

export interface LoginR {
  /**
   * 用户id
   */
  userId: string
  /**
   * 用户名
   */
  username: string
  /**
   * 用户邮箱
   */
  useremail: string
  /**
   * jwt
   */
  token: string
  /**
   * 用户权限
   */
  auth: AuthR
  /**
   * 用户头像 url
   */
  avatar: string
}

export interface UserInfo extends LoginR {
  [key: string]: any
  briefInfo: string
  phoneNumber: string
  birthday: string
  roomId?: string
}
