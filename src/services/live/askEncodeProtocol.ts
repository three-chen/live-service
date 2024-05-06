import type { AskEncodeProtocol, EncodeProtocol } from '../../data'
import type R from '../../data/R'
import { post } from '../../sigletonAxios'

export const askEncodeProtocol = (askEncodeProtocol: AskEncodeProtocol): Promise<R<EncodeProtocol>> => {
  return post(`/protocol/encode`, askEncodeProtocol)
}
