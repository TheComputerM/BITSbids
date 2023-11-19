import type { Component } from "solid-js";
import { Flex, HStack } from "styled-system/jsx";
import { Text } from "~/components/ui/typography";
import UserAvatar from "~/components/user-avatar";

const BidCard: Component<{ bid: Bid }> = ({ bid }) => {
  return (
    <Flex
      justify="space-between"
      align="center"
      bgColor="bg.subtle"
      px="4"
      py="2"
      borderRadius="l1"
    >
      <HStack>
        <Text>{bid.amount}</Text>
        <Text>{bid.createdAt}</Text>
      </HStack>
      <div>
        <UserAvatar user={bid.bidder} />
      </div>
    </Flex>
  );
};

export default BidCard;
