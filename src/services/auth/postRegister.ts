import type R from '../../data/R'
import type { RegisterInfo } from '../../data/auth/RegisterInfo'
import type { RegisterR } from '../../data/auth/registerR'
import { post } from '../../sigletonAxios'

export const postRegisterInfo = (registerInfo: RegisterInfo): Promise<R<RegisterR>> => {
  return post('/auth/register', registerInfo)
}
