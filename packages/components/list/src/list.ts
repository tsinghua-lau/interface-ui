import { buildProps } from '@fusion-ui-vue/utils'
import type { ExtractPropTypes } from 'vue'

export const listProps = buildProps({
  cs: {
    type: [Object, String],
  },
})

export type ListProps = ExtractPropTypes<typeof listProps>
