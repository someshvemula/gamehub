import { HStack, Text, Image, Box } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { CiSun } from "react-icons/ci";
import { PiMoonFill } from "react-icons/pi";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";
import Lottie from "lottie-react";
import AnimationBox from "./AnimationBox";
import AnimatedLogo from "../assets/AnimatedLogo.json";

interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent={"space-between"}>
      {/* <Box boxSize={"70px"}>
        <Lottie animationData={AnimatedLogo} loop={0}></Lottie>
      </Box> */}

      <Image src={logo} boxSize="60px" marginLeft={"0.2vw"} />
      <SearchBar onSearch={onSearch}></SearchBar>
      <HStack marginRight={"2vw"}>
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </HStack>
  );
};

export default NavBar;
