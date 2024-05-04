import type R from '@/service/data/R'
import type MergeInfo from '@/service/data/postImg/mergeInfo'
import type MergeR from '@/service/data/postImg/mergeR'
import { post } from '@/service/sigletonAxios'

export const postMergeInfo = (MergeInfo: MergeInfo): Promise<R<MergeR>> => {
  return post('/webrtcchat/merge', MergeInfo)
}
