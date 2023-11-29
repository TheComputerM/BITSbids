import { For, type Component, createSignal } from "solid-js";
import { css } from "styled-system/css";
import { Box, Stack } from "styled-system/jsx";

const Image: Component<{ image: string }> = (props) => {
  return (
    <div
      class={css({
        width: "100%",
        height: "100%",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "bg.muted",
      })}
      style={{ "background-image": `url(${props.image})` }}
    ></div>
  );
};

const ImageGallery: Component<{ images: string[] }> = (props) => {
  const attachments = props.images.length
    ? props.images
    : [
        "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",
      ];

  const [preview, setPreview] = createSignal(attachments[0]);

  return (
    <Stack gap="4" direction={{ base: "column-reverse", lg: "row" }}>
      <Stack gap="4" direction={{ base: "row", lg: "column" }}>
        <For each={attachments}>
          {(image) => (
            <button onClick={() => setPreview(image)}>
              <Box
                width="24"
                height="24"
                borderRadius="l2"
                overflow="hidden"
                borderWidth={2}
                borderColor={image === preview() ? "accent.default" : undefined}
                cursor="pointer"
              >
                <Image image={image} />
              </Box>
            </button>
          )}
        </For>
      </Stack>
      <Box
        bg="bg.subtle"
        w="100%"
        h="480px"
        borderRadius="l3"
        overflow="hidden"
      >
        <Image image={preview()} />
      </Box>
    </Stack>
  );
};

export default ImageGallery;
