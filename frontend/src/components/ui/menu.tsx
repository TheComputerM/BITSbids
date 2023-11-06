import { Menu as Ark, type MenuProps as ArkMenuProps } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { menu, type MenuVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(menu)

export type MenuProps = ArkMenuProps & MenuVariantProps

const MenuRoot = withProvider(styled(Ark.Root))
export const MenuArrow = withContext(styled(Ark.Arrow), 'arrow')
export const MenuArrowTip = withContext(styled(Ark.ArrowTip), 'arrowTip')
export const MenuContent = withContext(styled(Ark.Content), 'content')
export const MenuContextTrigger = withContext(styled(Ark.ContextTrigger), 'contextTrigger')
export const MenuItem = withContext(styled(Ark.Item), 'item')
export const MenuItemGroup = withContext(styled(Ark.ItemGroup), 'itemGroup')
export const MenuItemGroupLabel = withContext(styled(Ark.ItemGroupLabel), 'itemGroupLabel')
export const MenuOptionItem = withContext(styled(Ark.OptionItem), 'optionItem')
export const MenuPositioner = withContext(styled(Ark.Positioner), 'positioner')
export const MenuSeparator = withContext(styled(Ark.Separator), 'separator')
export const MenuTrigger = withContext(styled(Ark.Trigger), 'trigger')
export const MenuTriggerItem = withContext(styled(Ark.TriggerItem), 'triggerItem')

export const Menu = Object.assign(MenuRoot, {
  Root: MenuRoot,
  Arrow: MenuArrow,
  ArrowTip: MenuArrowTip,
  Content: MenuContent,
  ContextTrigger: MenuContextTrigger,
  Item: MenuItem,
  ItemGroup: MenuItemGroup,
  ItemGroupLabel: MenuItemGroupLabel,
  OptionItem: MenuOptionItem,
  Positioner: MenuPositioner,
  Separator: MenuSeparator,
  Trigger: MenuTrigger,
  TriggerItem: MenuTriggerItem,
})
