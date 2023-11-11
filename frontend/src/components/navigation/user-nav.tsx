import { Menu } from "~/components/ui/menu";
import { Avatar } from "~/components/ui/avatar";
import { Portal } from "solid-js/web";
import { HStack } from "styled-system/jsx";
import {
  TbLogout,
  TbMessage,
  TbSearch,
  TbUser,
} from "solid-icons/tb";
import { navigate } from "astro:transitions/client";
import type { Component } from "solid-js";

const UserNav: Component<{avatar: string, initials: string}> = (props) => {
  return (
    <Menu
      positioning={{ placement: "bottom-end", offset: { crossAxis: -24 } }}
      onSelect={async (id) => {
        if (id.value === "logout") {
          const response = await fetch("/logout", {
						method: "POST",
						redirect: "follow"
					});
          if (response.ok) {
            navigate("/");
          }
        } else {
          navigate(`/app/${id.value}`)
        }
      }}
    >
      <Menu.Trigger cursor="pointer" ml="1.5">
        <Avatar size="sm">
          <Avatar.Fallback>{props.initials}</Avatar.Fallback>
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
            <Menu.Item id="search">
              <HStack gap="2">
                <TbSearch />
                Search
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

export default UserNav;
