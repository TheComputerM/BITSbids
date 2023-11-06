import { HStack } from "styled-system/jsx";
import { Input } from "~/components/ui/input";
import { IconButton } from "~/components/ui/icon-button";
import { TbSend } from "solid-icons/tb";

export default function ChatInput() {
  return (
    <HStack>
      <Input placeholder="Message" />
      <IconButton>
        <TbSend />
      </IconButton>
    </HStack>
  );
}
