import type { LiveInfoR } from '../../data'
import type R from '../../data/R'
import { get } from '../../sigletonAxios'

export const getLiveByRoomId = (roomId: string): Promise<R<LiveInfoR>> => {
  return get(`/live/room/${roomId}`)
}
