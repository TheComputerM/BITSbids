import { HStack } from "styled-system/jsx";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { TbSend } from "solid-icons/tb";

export default function ChatInput() {
  return (
    <HStack>
      <Input placeholder="Message" />
      {/* TODO: Replace with IconButton when released */}
      <Button px={0}>
        <TbSend />
      </Button>
    </HStack>
  );
}
