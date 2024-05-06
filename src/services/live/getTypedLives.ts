import type { TypedLives } from '../../data'
import type R from '../../data/R'
import { get } from '../../sigletonAxios'

export const getTypedLives = (): Promise<R<TypedLives>> => {
  return get(`/live/`)
}
