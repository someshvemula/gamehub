import { HStack, Text, Image } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { CiSun } from "react-icons/ci";
import { PiMoonFill } from "react-icons/pi";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image src={logo} boxSize="60px" marginLeft={"0.2vw"} />
      <SearchBar></SearchBar>
      <HStack marginRight={"2vw"}>
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </HStack>
  );
};

export default NavBar;
