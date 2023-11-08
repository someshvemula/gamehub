import { Button, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import Lottie from "lottie-react";
import ErrorAnimation from "../assets/ErrorAnimation.json";
import AnimationBox from "./AnimationBox";
import { Genre } from "../hooks/useGenre";
import { Publisher } from "../hooks/usePublishers";
import { Developer } from "../hooks/useDevelopers";
import NoResultsAnimation from "../assets/NoResultsAnimation.json";
import { useState } from "react";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  selectedPublisher: Publisher | null;
  selectedDeveloper: Developer | null;
  searchText: string | null;
}

const GameGrid = ({
  selectedGenre,
  selectedPlatform,
  selectedPublisher,
  selectedDeveloper,
  searchText,
}: Props) => {
  const [page, setPage] = useState(1);
  const page_size = 20;
  const { data, error, isLoading } = useGames(
    selectedGenre,
    selectedPlatform,
    selectedPublisher,
    selectedDeveloper,
    searchText,
    page,
    page_size
  );
  const skeletonMap = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  if (error) {
    return (
      <>
        <Text
          as={"b"}
          fontSize={{ sm: "sm", md: "2xl", lg: "3xl", xl: "5xl" }}
          marginX={"10px"}
        >
          {error}
        </Text>
        <AnimationBox>
          <Lottie animationData={ErrorAnimation}></Lottie>
        </AnimationBox>
      </>
    );
  }

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={1}
        padding={"10px"}
      >
        {isLoading &&
          skeletonMap.map((Skeleton) => (
            <GameCardContainer key={Skeleton}>
              <GameCardSkeleton key={Skeleton}></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {!isLoading &&
          data.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard key={game.id} game={game}></GameCard>
            </GameCardContainer>
          ))}
        {!isLoading && data.length === 0 && (
          <>
            <Text
              as={"b"}
              fontSize={{ sm: "sm", md: "2xl", lg: "3xl", xl: "5xl" }}
              marginX={"10px"}
              whiteSpace={"nowrap"}
            >
              Uh oh, there aren't many results...
            </Text>
            <AnimationBox>
              <Lottie animationData={NoResultsAnimation} loop={0}></Lottie>
            </AnimationBox>
          </>
        )}
      </SimpleGrid>
      {data.length !== 0 && (
        <Button isDisabled={page === 1} onClick={() => setPage(page - 1)}>
          Previos
        </Button>
      )}
      {data.length !== 0 && (
        <Button
          marginLeft={2}
          onClick={() => setPage(page + 1)}
          isDisabled={data.length === 0}
        >
          Next
        </Button>
      )}
    </>
  );
};

export default GameGrid;
