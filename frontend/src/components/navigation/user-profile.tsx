import { Menu } from "~/components/ui/menu";
import { Avatar } from "~/components/ui/avatar";
import { Portal } from "solid-js/web";
import { HStack } from "styled-system/jsx";
import {
  TbBuildingStore,
  TbGavel,
  TbLogout,
  TbMessage,
  TbUser,
} from "solid-icons/tb";
import { navigate } from "astro:transitions/client";
import type { Component } from "solid-js";

const UserProfile: Component<{avatar: string}> = (props) => {
  return (
    <Menu
      positioning={{ placement: "bottom-end", offset: { crossAxis: -24 } }}
      onSelect={(id) => navigate(`/app/${id.value}`)}
    >
      <Menu.Trigger cursor="pointer" ml="1.5">
        <Avatar size="sm">
          <Avatar.Fallback>PA</Avatar.Fallback>
          <Avatar.Image src={props.avatar} alt="Avatar" />
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
            <Menu.Item id="chat">
              <HStack gap="2">
                <TbMessage />
                Chats
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

export default UserProfile;
