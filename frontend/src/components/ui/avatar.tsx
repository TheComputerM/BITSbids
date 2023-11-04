import { Avatar as Ark, type AvatarProps as ArkProps } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { avatar, type AvatarVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(avatar)

export type AvatarProps = ArkProps & AvatarVariantProps

const AvatarRoot = withProvider(styled(Ark.Root), 'root')
export const AvatarFallback = withContext(styled(Ark.Fallback), 'fallback')
export const AvatarImage = withContext(styled(Ark.Image), 'image')

export const Avatar = Object.assign(AvatarRoot, {
  Root: AvatarRoot,
  Fallback: AvatarFallback,
  Image: AvatarImage,
})
