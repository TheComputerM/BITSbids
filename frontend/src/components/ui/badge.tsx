import { ark } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { badge, type BadgeVariantProps } from 'styled-system/recipes'

export type BadgeProps = BadgeVariantProps & typeof ark.div
export const Badge = styled(ark.div, badge)