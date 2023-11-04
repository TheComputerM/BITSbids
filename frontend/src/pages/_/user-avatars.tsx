import { For } from "solid-js";
import { Avatar } from "~/components/ui/avatar";

export default function UserAvatars() {
  return (
    <For each={["PA", "SB", "MO", "RS", "ZT"]}>
      {(initials) => (
        <Avatar _first={{ marginStart: "0" }} marginStart="-3" size="lg">
          <Avatar.Fallback>{initials}</Avatar.Fallback>
          <Avatar.Image
            src={`https://i.pravatar.cc/300/img=${initials}`}
            alt="avatar"
          />
        </Avatar>
      )}
    </For>
  );
}
