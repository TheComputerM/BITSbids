import { navigate } from "astro:transitions/client";
import { TbMessages } from "solid-icons/tb";
import type { Component } from "solid-js";
import { Button } from "~/components/ui/button";

const ChatWithSeller: Component<{product: Product}> = (props) => {
  async function openChat() {
    const response = await fetch("http://localhost:8080/api/chatroom", {
      method: "POST",
      body: JSON.stringify({
        id: props.product.id
      }),
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("session")!}`,
        "Content-Type": "application/json",
      }
    });
    const id = await response.json();
    navigate(`/app/chat/${id}`);
  }

  return (
    <Button size="lg" variant="outline" onClick={openChat}>
      Chat with Seller
      <TbMessages />
    </Button>
  );
};

export { ChatWithSeller };
