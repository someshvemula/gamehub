import { Grid, Progress, Text } from "@chakra-ui/react";
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
      <Grid templateColumns="repeat(2, 0.5fr)" gap={5} marginLeft={5}>
        {games.map((game) => (
          <GameCard game={game}></GameCard>
        ))}
      </Grid>
    </>
  );
};

export default GameGrid;
