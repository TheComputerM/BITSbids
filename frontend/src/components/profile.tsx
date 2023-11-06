import type { Component } from "solid-js";
import { Avatar, type AvatarProps } from "~/components/ui/avatar";

const Profile: Component<AvatarProps & { fallback: string; image: string }> = ({
  fallback,
  image,
  ...props
}) => {
  return (
    <Avatar {...props}>
      <Avatar.Fallback>{fallback}</Avatar.Fallback>
      <Avatar.Image src={image} alt={`${fallback} avatar`} />
    </Avatar>
  );
};


export default Profile;