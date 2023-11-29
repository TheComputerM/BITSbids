import { HStack } from "styled-system/jsx";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { TbSearch } from "solid-icons/tb";
import { css } from "styled-system/css";

const ProductSearch = () => {
  return (
    <HStack>
      <Input placeholder="Search..." />
      <Button px={{mdDown: "0"}}>
        <TbSearch />
        <span class={css({ hideBelow: "md" })}>
          Search
        </span>
      </Button>
    </HStack>
  );
};

export default ProductSearch;
