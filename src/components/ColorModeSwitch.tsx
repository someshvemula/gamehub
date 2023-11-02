import { Switch, useColorMode } from "@chakra-ui/react";
import { HiMoon } from "react-icons/hi";
import { CiSun } from "react-icons/ci";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode === "light") {
    return <HiMoon size={"25px"} onClick={toggleColorMode}></HiMoon>;
  } else {
    return <CiSun size={"25px"} onClick={toggleColorMode}></CiSun>;
  }
};

export default ColorModeSwitch;
