import {
  For,
  type Component,
  createSignal,
  onMount,
} from "solid-js";
import { getChatrooms } from "~/lib/api/chatroom";
import { ChatroomCard } from "./chatroom-card";

const Chatrooms: Component<{type: string}> = (props) => {
  const [chatrooms, setChatrooms] = createSignal<Chatroom[]>();

  onMount(async () => {
    const data = await getChatrooms(localStorage.getItem("session")!, props.type);
    setChatrooms(data);
  });


  return <For each={chatrooms()}>{(room) => <ChatroomCard room={room} />}</For>;
};

export { Chatrooms };
