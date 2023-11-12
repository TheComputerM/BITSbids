import type { Component } from "solid-js";
import { Avatar, type AvatarProps } from "~/components/ui/avatar";

const UserAvatar: Component<AvatarProps & { user: User }> = ({
  user,
  ...props
}) => {
  // The initials of the name
  const fallback = user.name
    .split(" ", 2)
    .map((x) => x.charAt(0).toUpperCase())
    .join("");

  return (
    <Avatar size="sm" {...props}>
      <Avatar.Fallback>{fallback}</Avatar.Fallback>
      <Avatar.Image src={user.avatar} alt={`${fallback} avatar`} />
    </Avatar>
  );
};

export default UserAvatar;
