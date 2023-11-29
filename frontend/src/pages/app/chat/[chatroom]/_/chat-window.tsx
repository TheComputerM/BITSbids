import { Flex } from "styled-system/jsx";
import ChatMessage from "./chat-message";
import { HStack } from "styled-system/jsx";
import { Input } from "~/components/ui/input";
import { IconButton } from "~/components/ui/icon-button";
import { TbSend } from "solid-icons/tb";
import { createWS } from "@solid-primitives/websocket";
import { type Component, createSignal, For } from "solid-js";

const ChatWindow: Component<{ chatroomId: string }> = (props) => {
  const sessionId = localStorage.getItem("session")!;
  const ws = createWS(
    `ws://localhost:8080/ws/chatroom/${props.chatroomId}/${sessionId}`
  );
  const [input, setInput] = createSignal("");
  const [messages, setMessages] = createSignal<string[]>([]);

  ws.onmessage = (event) => {
    const message = event.data
    setMessages((oldMessages) => [...oldMessages, message]);
  };

  function sendMessage() {
    ws.send(input());
    setInput('');
  }

  return (
    <>
      <Flex gap="6" direction="column" mt="4" flexGrow={1}>
        <For each={messages()}>{(m) => <ChatMessage message={m} />}</For>
      </Flex>
      <HStack>
        <Input
          value={input()}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Message"
        />
        <IconButton onClick={sendMessage}>
          <TbSend />
        </IconButton>
      </HStack>
    </>
  );
};

export { ChatWindow };
