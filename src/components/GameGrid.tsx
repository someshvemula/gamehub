import { Center, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import Lottie from "lottie-react";
import ErrorAnimation from "../assets/ErrorAnimation.json";
import { Box } from "@chakra-ui/react";
import AnimationBox from "./AnimationBox";
import { Genre } from "../hooks/useGenre";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
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
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
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
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
