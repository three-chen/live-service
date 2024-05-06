export interface LiveInfo {
  [key: string]: any
  liveId?: string
  uploaderId: string
  roomId?: string
  typeId?: string
  liveTitle?: string
  cover_picture_url?: string
  like_count?: string
  view_count?: string
  startTime?: Date
  endTime?: Date
  isEnded?: boolean
  encodeProtocol: string
}
