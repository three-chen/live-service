export enum DecodeProtocolEnum {
  HTTPFLV = 'HTTPFLV',
  HLS = 'HLS',
  WEBRTC = 'WEBRTC'
}

export type DecodeProtocol = keyof typeof DecodeProtocolEnum // other protocol types

export interface AskDecodeProtocol {
  // liveId 直播ID
  id: string
  supportProtocols: DecodeProtocol[]
}
