import stateCss from '@interface-ui/theme/styles/state.less?inline'
import type { States } from './types'

const match = stateCss.matchAll(
  /--\b(md|in)\b-sys-state-([a-z]+)-state-layer-opacity: ([\.0-9]+);/g
)

const states: States = [...match].reduce((pre, cur) => {
  const [_, _source, state, value] = cur
  pre[state] = value
  return pre
}, {} as any)

export default states
