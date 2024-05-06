import type { AskDecodeProtocol, DecodeProtocol } from '../../data'
import type R from '../../data/R'
import { post } from '../../sigletonAxios'

export const askDecodeProtocol = (askDecodeProtocol: AskDecodeProtocol): Promise<R<DecodeProtocol>> => {
  return post(`/protocol/decode`, askDecodeProtocol)
}
