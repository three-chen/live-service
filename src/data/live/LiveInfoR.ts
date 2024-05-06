export interface LiveInfoR {
  liveId?: string // 直播id
  uploaderId: string
  roomId?: string // 房间id
  typeId: string
  liveTitle: string
  cover_picture_url: string
  like_count: string
  view_count: string
  startTime: Date
  endTime?: Date
  isEnded: boolean
  encodeProtocol: string
}
