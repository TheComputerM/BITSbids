import { Menu } from "~/components/ui/menu";
import { Avatar } from "../ui/avatar";
import { Portal } from "solid-js/web";
import { HStack } from "styled-system/jsx";
import { TbBuildingStore, TbGavel, TbLogout, TbUser } from "solid-icons/tb";

export default function UserProfile() {
  return (
    <Menu positioning={{ placement: "bottom-end", offset: { crossAxis: -24 } }}>
      <Menu.Trigger cursor="pointer" mx="1.5">
        <Avatar size="sm">
          <Avatar.Fallback>PA</Avatar.Fallback>
          <Avatar.Image src="https://i.pravatar.cc/300" alt="avatar" />
        </Avatar>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item id="profile">
              <HStack gap="2">
                <TbUser />
                Profile
              </HStack>
            </Menu.Item>
            <Menu.Item id="profile/bids">
              <HStack gap="2">
                <TbGavel />
                Bids
              </HStack>
            </Menu.Item>
            <Menu.Item id="profile/products">
              <HStack gap="2">
                <TbBuildingStore />
                Products
              </HStack>
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item id="logout">
              <HStack gap="2">
                <TbLogout />
                Logout
              </HStack>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu>
  );
}
