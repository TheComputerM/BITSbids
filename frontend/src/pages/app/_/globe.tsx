import { onCleanup, onMount } from "solid-js";
import createGlobe from "cobe";
import { css } from "styled-system/css";

const Globe = () => {
  let canvas!: HTMLCanvasElement;
  const size = 350;
  onMount(() => {
    let phi = 0;
    const globe = createGlobe(canvas, {
      devicePixelRatio: window.devicePixelRatio,
      width: size * window.devicePixelRatio,
      height: size * window.devicePixelRatio,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      scale: 1,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [1, 0.5, 1],
      glowColor: [1, 1, 1],
      offset: [0, 0],
      markers: [],
      onRender(state) {
        state.phi = phi;
        phi += 0.005;
      },
    });
    onCleanup(() => {
      globe.destroy();
    });
  });

  return (
    <canvas
      ref={canvas}
      style={{ width: `${size}px`, height: `${size}px`, "z-index": "-1" }}
      class={css({ _dark: { filter: "invert()" } })}
    />
  );
};

export default Globe;
