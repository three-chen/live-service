import type { LoginR } from '../auth'

export interface UserInfo extends Partial<LoginR> {
  [key: string]: any
  briefInfo?: string
  phoneNumber?: string
  birthday?: Date
  roomId?: string
}
