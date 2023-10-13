import type { UseNamespaceReturn } from '@fusion-ui-vue/utils'
import { themePaletteColor, useColor } from '@fusion-ui-vue/theme'
import type {
  ButtonGroupProps,
  ButtonProps,
  IconButtonProps,
} from '@fusion-ui-vue/components'
import { computed } from 'vue'
import { useJSS } from '../use-jss'

const jss = useJSS()

export const useButton = (props: ButtonProps, ns: UseNamespaceReturn) => {
  const $color = useColor(props.color)
  const $onColor = computed(() =>
    themePaletteColor.includes(props.color as string)
      ? `var(--md-sys-color-on-${props.color})`
      : null
  )

  return computed(() => {
    const styles = {
      [ns.b()]: {
        '--fn-button-color': $color.value ?? 'var(--md-sys-color-primary)',
        '--fn-button-on-color':
          $onColor.value ?? 'var(--md-sys-color-on-primary)',
      },
      [ns.m('filled')]: {
        'box-shadow': props.disableElevation
          ? 'var(--md-sys-elevation-level-0)'
          : 'var(--md-sys-elevation-level-2)',
        '&:not([disabled]):hover': {
          'box-shadow': props.disableElevation
            ? 'var(--md-sys-elevation-level-0)'
            : 'var(--md-sys-elevation-level-4)',
        },
      },
    }

    return jss!.createStyleSheet(styles as any).attach().classes
  })
}

export const useIconButton = (
  props: IconButtonProps,
  ns: UseNamespaceReturn
) => {
  const $color = useColor(props.color)

  return computed(() => {
    const styles = {
      [ns.b()]: {
        '--fn-icon-button-color': $color.value ?? 'var(--md-sys-color-primary)',
      },
    }

    return jss!.createStyleSheet(styles as any).attach().classes
  })
}

export const useButtonGroup = (
  props: ButtonGroupProps,
  ns: UseNamespaceReturn
) => {
  const $color = useColor(props.color)

  return computed(() => {
    const styles = {
      [ns.b()]: {
        '--fn-button-group-color':
          $color.value ?? 'var(--md-sys-color-primary)',
      },
    }

    return jss!.createStyleSheet(styles as any).attach().classes
  })
}
