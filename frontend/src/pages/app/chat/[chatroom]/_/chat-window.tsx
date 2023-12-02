import { Flex } from "styled-system/jsx";
import ChatMessage from "./chat-message";
import { HStack } from "styled-system/jsx";
import { Input } from "~/components/ui/input";
import { IconButton } from "~/components/ui/icon-button";
import { TbSend } from "solid-icons/tb";
import { createWS } from "@solid-primitives/websocket";
import { type Component, createSignal, For, onMount } from "solid-js";
import { getUser } from "~/lib/api/user";
import { getChatrooms, getMessages } from "~/lib/api/chatroom";

const ChatWindow: Component<{ chatroomId: string; user: any }> = (props) => {
  const sessionId = localStorage.getItem("session")!;

  const ws = createWS(
    `ws://localhost:8080/ws/chatroom/${props.chatroomId}/${sessionId}`
  );
  const [input, setInput] = createSignal("");
  const [messages, setMessages] = createSignal<string[]>([]);

  onMount(() => {
    getMessages(props.chatroomId).then((data) => {
      console.log(data);
      setMessages(data.map(x => x.content));
    });
  });

  ws.onmessage = (event) => {
    const message: string = event.data;
    console.log(message);
    setMessages((oldMessages) => [...oldMessages, message]);
  };

  async function sendMessage() {
    try {
      const message = {
        sender: props.user,
        room: await getChatrooms(props.chatroomId),
        content: input(),
      };

      //console.log(input());
      const response = await fetch("http://127.0.0.1:8080/api/messages", {
        method: "POST",
        body: JSON.stringify(message),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log("success");
      }
    } catch (error) {
      console.error(error);
    }
    ws.send(input());
    setInput("");
  }

  return (
    <>
      <Flex gap="6" direction="column" mt="4" flexGrow={1}>
        <For each={messages()}>{(m) => <ChatMessage message={m} />}</For>
      </Flex>
      <HStack>
        <Input
          id="input"
          value={input()}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              //@ts-ignore
              setInput(e.target.value);
              sendMessage();
            } else {
              // @ts-ignore
              setInput(e.target.value);
            }
          }}
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
