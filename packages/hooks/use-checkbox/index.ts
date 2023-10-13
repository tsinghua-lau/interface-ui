import type { CheckboxProps } from '@fusion-ui-vue/components'
import { useColor } from '@fusion-ui-vue/theme'
import type { UseNamespaceReturn } from '@fusion-ui-vue/utils'
import { computed } from 'vue'
import { useJSS } from '../use-jss'

const jss = useJSS()

export const useCheckbox = (props: CheckboxProps, ns: UseNamespaceReturn) => {
  const $color = useColor(props.color)

  return computed(() => {
    const styles = {
      [ns.b()]: {
        '--fn-checkbox-color': $color.value ?? 'var(--md-sys-color-primary)',
      },
      [ns.e('icon')]: {
        color: $color.value ?? 'var(--md-sys-color-primary)',
      },
    }
    return jss!.createStyleSheet(styles).attach().classes
  })
}
