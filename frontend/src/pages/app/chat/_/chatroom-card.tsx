import { TbChevronRight } from "solid-icons/tb";
import type { Component } from "solid-js";
import { Box, HStack } from "styled-system/jsx";
import { iconButton } from "styled-system/recipes";
import { Link } from "~/components/ui/link";
import { Text } from "~/components/ui/typography";
import UserAvatar from "~/components/user-avatar";
import { AnonymousUser } from "~/lib/anon";

const ChatroomCard: Component<{ room: Chatroom }> = ({ room }) => {
  return (
    <Box px="4" py="3" bgColor="bg.default" borderRadius="l2" boxShadow="sm">
      <HStack>
        <UserAvatar user={AnonymousUser} />
        <Text fontWeight="semibold" textStyle="lg">
          {AnonymousUser.name}
        </Text>
        <Text color="fg.subtle">regarding</Text>
        <Link href={`/app/product/${room.product.id}`}>
          {room.product.name}
        </Link>
        <div style="flex-grow:1" />
        <a
          href={`/app/chat/${room.id}`}
          class={iconButton({ size: "md", variant: "ghost" })}
        >
          <TbChevronRight />
        </a>
      </HStack>
    </Box>
  );
};

export { ChatroomCard };
