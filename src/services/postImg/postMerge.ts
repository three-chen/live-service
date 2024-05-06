import type R from '../../data/R'
import type MergeInfo from '../../data/postImg/mergeInfo'
import type MergeR from '../../data/postImg/mergeR'
import { post } from '../../sigletonAxios'

export const postMergeInfo = (MergeInfo: MergeInfo, path: string): Promise<R<MergeR>> => {
  return post(`/uploadimg/${path}/merge`, MergeInfo)
}
