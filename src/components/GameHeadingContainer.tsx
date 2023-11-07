import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameHeadingContainer = ({ children }: Props) => {
  return (
    <Box marginY={"10px"} paddingLeft={2}>
      {children}
    </Box>
  );
};

export default GameHeadingContainer;
