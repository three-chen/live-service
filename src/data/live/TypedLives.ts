import type { LiveInfoR } from './LiveInfoR'

// 直播分区：0: 未分区 1：游戏区 2：运动区 3：生活区
export enum LiveType {
  UNPARTIED = 0,
  GAME = 1,
  SPORT = 2,
  LIFE = 3
}

export enum LiveTypeName {
  UNPARTIED = '未分区',
  GAME = '游戏区',
  SPORT = '运动区',
  LIFE = '生活区'
}

export interface TypedLives {
  [LiveType.UNPARTIED]: LiveInfoR[]
  [LiveType.GAME]: LiveInfoR[]
  [LiveType.SPORT]: LiveInfoR[]
  [LiveType.LIFE]: LiveInfoR[]
}
