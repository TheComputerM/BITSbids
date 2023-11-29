import { TbGavel } from "solid-icons/tb";
import { Portal } from "solid-js/web";
import { Button } from "~/components/ui/button";
import { Dialog } from "~/components/ui/dialog";

const PlaceBidButton = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button size="xl">
          Place a Bid
          <TbGavel />
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Description>Dialog Description</Dialog.Description>
            <Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default PlaceBidButton;
