import { Tooltip as Ark, type TooltipProps as ArkTooltipProps } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { tooltip, type TooltipVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tooltip)

export type TooltipProps = ArkTooltipProps & TooltipVariantProps

const TooltipRoot = withProvider(styled(Ark.Root))
const TooltipArrow = withContext(styled(Ark.Arrow), 'arrow')
const TooltipArrowTip = withContext(styled(Ark.ArrowTip), 'arrowTip')
const TooltipContent = withContext(styled(Ark.Content), 'content')
const TooltipPositioner = withContext(styled(Ark.Positioner), 'positioner')
const TooltipTrigger = withContext(styled(Ark.Trigger), 'trigger')

export const Tooltip = Object.assign(TooltipRoot, {
  Root: TooltipRoot,
  Arrow: TooltipArrow,
  ArrowTip: TooltipArrowTip,
  Content: TooltipContent,
  Positioner: TooltipPositioner,
  Trigger: TooltipTrigger,
});
