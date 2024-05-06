import type R from '../../data/R'
import type VerifyInfo from '../../data/postImg/verifyInfo'
import type VerifyR from '../../data/postImg/verifyR'
import { post } from '../../sigletonAxios'

export const postVerifyInfo = (VerifyInfo: VerifyInfo, path: string): Promise<R<VerifyR>> => {
  return post(`/uploadimg/${path}/verify`, VerifyInfo)
}
