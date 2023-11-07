import { Heading } from "@chakra-ui/react";
import React from "react";
import { Platform } from "../hooks/useGames";
import { Publisher } from "../hooks/usePublishers";
import { Genre } from "../hooks/useGenre";

interface Props {
  platform: Platform | null;
  publisher: Publisher | null;
  genre: Genre | null;
}
const GameHeading = ({ platform, publisher, genre }: Props) => {
  const heading = `${platform?.name ? platform.name : ""} ${
    genre?.name ? genre.name : ""
  } Games ${publisher?.name ? "by " + publisher.name : ""}`;
  return <Heading size={"2xl"}>{heading}</Heading>;
};

export default GameHeading;
