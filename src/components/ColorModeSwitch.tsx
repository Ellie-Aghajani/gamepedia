import { IconButton, useColorMode } from "@chakra-ui/react";
import { BsMoonStars, BsSun } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      icon={isDark ? <BsSun /> : <BsMoonStars />}
      onClick={toggleColorMode}
      variant="ghost"
    />
  );
};

export default ColorModeSwitch;
