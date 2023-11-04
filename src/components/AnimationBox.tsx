import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const AnimationBox = ({ children }: Props) => {
  return (
    <Box
      width={{ sm: "50vw", md: "50vw", lg: "30vw", xl: "30vw" }}
      marginX={{ sm: "25vw", md: "25vw", lg: "0", xl: "0" }}
      height={"60vh"}
    >
      {children}
    </Box>
  );
};

export default AnimationBox;
