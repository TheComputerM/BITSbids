import { TbSunFilled, TbMoonFilled } from "solid-icons/tb";
import { css } from "styled-system/css";
import { IconButton } from "./ui/icon-button";

function toggleTheme() {
  const newTheme =
    localStorage.getItem("theme-mode") === "dark" ? "light" : "dark";
  localStorage.setItem("theme-mode", newTheme);
  document.documentElement.setAttribute("data-color-mode", newTheme);
}

export default function ThemeSwitcher() {
  return (
    <IconButton variant="ghost" onClick={toggleTheme}>
      <TbSunFilled size={24} class={css({ _light: { display: "none" } })} />
      <TbMoonFilled size={24} class={css({ _dark: { display: "none" } })} />
    </IconButton>
  );
}
