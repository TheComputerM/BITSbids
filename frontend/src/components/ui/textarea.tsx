import { ark } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { textarea, type TextareaVariantProps } from 'styled-system/recipes'

export type TextareaProps = TextareaVariantProps & typeof ark.textarea
export const Textarea = styled(ark.textarea, textarea)
