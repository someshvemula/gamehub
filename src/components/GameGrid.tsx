import { Grid, Progress, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import Lottie from "lottie-react";
import LoadingAnimation from "../assets/LoadingAnimation.json";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  if (error) {
    return <Text>{error}</Text>;
  }
  if (isLoading) {
    return <Lottie animationData={LoadingAnimation} />;
  }
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        gap={3}
        marginLeft={5}
        padding={"10px"}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
