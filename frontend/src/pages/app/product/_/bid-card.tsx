import { formatDistanceToNow } from "date-fns";
import { TbCoins } from "solid-icons/tb";
import type { Component } from "solid-js";
import { Flex } from "styled-system/jsx";
import { Text } from "~/components/ui/typography";

const BidCard: Component<{ bid: Bid }> = ({ bid }) => {
  const placedAt = formatDistanceToNow(new Date(bid.createdAt), {
    addSuffix: true
  });
  return (
    <Flex
      justify="space-between"
      align="center"
      bgColor="bg.subtle"
      px="4"
      py="2"
      borderRadius="l1"
    >
      <Text display="flex" alignItems="center" gap="1" textStyle="xl" fontWeight="bold">
        {bid.amount}
        <TbCoins />
      </Text>
      <Text color="fg.subtle">
        placed {placedAt}
      </Text>
    </Flex>
  );
};

export default BidCard;
