import type R from '@/service/data/R'
import type VerifyInfo from '@/service/data/postImg/verifyInfo'
import type VerifyR from '@/service/data/postImg/verifyR'
import { post } from '@/service/sigletonAxios'

export const postVerifyInfo = (VerifyInfo: VerifyInfo): Promise<R<VerifyR>> => {
  return post('/webrtcchat/verify', VerifyInfo)
}
