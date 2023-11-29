import { createSignal, type Component, type ParentComponent } from "solid-js";
import { Card } from "./ui/card";
import { css } from "styled-system/css";
import { button } from "styled-system/recipes";
import { Flex, HStack, Stack } from "styled-system/jsx";
import { Text } from "./ui/typography";
import { TbCalendarTime, TbCashOff, TbChevronRight } from "solid-icons/tb";
import UserAvatar from "./user-avatar";
import {
  formatDistanceToNowStrict,
  formatDuration,
  intervalToDuration,
} from "date-fns";
import { Tooltip } from "./ui/tooltip";
import { Portal } from "solid-js/web";

const DeadlineCountdown: Component<{ endingAt: string }> = ({ endingAt }) => {
  const deadline = new Date(endingAt);
  const getDuration = () =>
    intervalToDuration({ start: Date.now(), end: deadline });

  const [countdown, setCountdown] = createSignal(formatDuration(getDuration()));

  return (
    <Tooltip
      open={false}
      openDelay={250}
      onOpenChange={({ open }: { open: boolean }) => {
        if (open) {
          setCountdown(formatDuration(getDuration()));
        }
      }}
    >
      <Tooltip.Trigger display="flex" alignItems="center" gap="1">
        {formatDistanceToNowStrict(deadline, { roundingMethod: "floor" })}
        <TbCalendarTime style={{ "margin-left": "2px" }} />
      </Tooltip.Trigger>
      <Portal>
        <Tooltip.Positioner>
          <Tooltip.Arrow>
            <Tooltip.ArrowTip />
          </Tooltip.Arrow>
          <Tooltip.Content>{countdown()}</Tooltip.Content>
        </Tooltip.Positioner>
      </Portal>
    </Tooltip>
  );
};

const InfoCard: ParentComponent<{ title: string }> = (props) => {
  return (
    <Stack
      flexGrow={1}
      bgColor="bg.emphasized"
      borderRadius="l1"
      justify="space-between"
      px="4"
      py="3"
      gap="0.5"
    >
      <Text textStyle="sm" color="fg.emphasized" fontWeight="medium">
        {props.title}:
      </Text>
      <Text fontWeight="bold" fontSize="2xl">
        {props.children}
      </Text>
    </Stack>
  );
};

const ProductCard: Component<{ product: Product }> = ({ product }) => {
  const displayImage =
    product.attachments[0] ??
    "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
  return (
    <Card flexDirection={{ base: "column", md: "row" }}>
      <div
        class={css({
          width: { base: "100%", md: "300px" },
          minHeight: "275px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundColor: "bg.disabled",
          borderRadius: "inherit",
          flexShrink: 0,
        })}
        style={{ "background-image": `url(${displayImage})` }}
      />
      <Flex direction="column" grow={1}>
        <Card.Header>
          <Card.Title>{product.name}</Card.Title>
          <Card.Description>{product.description}</Card.Description>
        </Card.Header>
        <Card.Body>
          <Flex gap="2" flexWrap="wrap">
            <InfoCard title="Ends In">
              <DeadlineCountdown endingAt={product.endingAt} />
            </InfoCard>
            <InfoCard title="Buy Instantly">
              {product.autoSellPrice ?? <TbCashOff size={32} />}
            </InfoCard>
            <InfoCard title="Base Price">{product.basePrice}</InfoCard>
          </Flex>
        </Card.Body>
        <Card.Footer>
          <a href={`/app/product/${product.id}`} class={button({ size: "sm" })}>
            Visit
            <TbChevronRight />
          </a>
        </Card.Footer>
      </Flex>
    </Card>
  );
};

export default ProductCard;
