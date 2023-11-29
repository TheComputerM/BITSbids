import { formatDuration, intervalToDuration } from "date-fns";
import { onMount, type Component, createSignal, onCleanup } from "solid-js";
import { css } from "styled-system/css";

const Countdown: Component<{ endingAt: string }> = ({ endingAt }) => {
  const deadline = new Date(endingAt);
  const getTimeLeft = () =>
    formatDuration(intervalToDuration({ start: new Date(), end: deadline }));

  const [countdown, setCountdown] = createSignal(getTimeLeft());

  let interval: NodeJS.Timer;

  onMount(() => {
    interval = setInterval(() => {
      setCountdown(getTimeLeft());
    }, 1000);
  });

  onCleanup(() => {
    clearInterval(interval);
  });

  return (
    <div
      class={css({
        fontWeight: "semibold",
        fontFamily: "mono",
        textStyle: "lg",
        textAlign: "center",
      })}
    >
      {countdown()}
    </div>
  );
};

export default Countdown;
