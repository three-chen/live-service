export enum EncodeProtocolEnum {
  RTMP = 'RTMP',
  HTTPFLV = 'HTTPFLV',
  HLS = 'HLS',
  WEBRTC = 'WEBRTC',
  SRT = 'SRT'
}
export type EncodeProtocol = keyof typeof EncodeProtocolEnum // other protocol types

export interface AskEncodeProtocol {
  // 用户Id
  id: string
  supportProtocols: EncodeProtocol[]
}
