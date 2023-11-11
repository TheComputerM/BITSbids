import { ark } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { label, type LabelVariantProps } from 'styled-system/recipes'

export type LabelProps = LabelVariantProps & typeof ark.label
export const Label = styled(ark.label, label)