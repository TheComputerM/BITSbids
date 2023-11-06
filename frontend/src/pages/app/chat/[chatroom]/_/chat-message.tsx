import type { Component } from "solid-js";
import { css } from "styled-system/css";
import { Text } from "~/components/ui/typography";

interface ChatMessageProps {
  fromUser?: boolean;
  message: string;
}

const ChatMessage: Component<ChatMessageProps> = (props) => {
  return (
    <div
      class={css({
        alignSelf: props.fromUser ? "end" : "start",
        position: "relative",
      })}
    >
      <div
        class={css({
          bgColor: props.fromUser ? "accent.default" : "bg.emphasized",
          color: props.fromUser ? "accent.fg" : "fg.default",
          px: "2",
          py: "1",
          borderRadius: "l1",
        })}
      >
        {props.message}
      </div>
      <Text
        color="fg.muted"
        fontSize="xs"
        position="absolute"
        right={props.fromUser ? "0" : undefined}
      >
        12:00pm
      </Text>
    </div>
  );
};

export default ChatMessage;
