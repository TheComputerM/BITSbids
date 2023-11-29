import { Dialog as Ark, type DialogProps as ArkDialogProps } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { dialog, type DialogVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(dialog)

export type DialogProps = ArkDialogProps & DialogVariantProps

const DialogRoot = withProvider(styled(Ark.Root))
export const DialogBackdrop = withContext(styled(Ark.Backdrop), 'backdrop')
export const DialogCloseTrigger = withContext(styled(Ark.CloseTrigger), 'closeTrigger')
export const DialogContent = withContext(styled(Ark.Content), 'content')
export const DialogDescription = withContext(styled(Ark.Description), 'description')
export const DialogPositioner = withContext(styled(Ark.Positioner), 'positioner')
export const DialogTitle = withContext(styled(Ark.Title), 'title')
export const DialogTrigger = withContext(styled(Ark.Trigger), 'trigger')

export const Dialog = Object.assign(DialogRoot, {
  Root: DialogRoot,
  Backdrop: DialogBackdrop,
  CloseTrigger: DialogCloseTrigger,
  Positioner: DialogPositioner,
  Content: DialogContent,
  Description: DialogDescription,
  Title: DialogTitle,
  Trigger: DialogTrigger,
})
