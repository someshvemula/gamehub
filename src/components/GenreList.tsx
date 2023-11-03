import { Button } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";

const GenreList = () => {
  const { genres, error, isLoading } = useGenre();
  return genres.map((genre) => <Button>{genre.name}</Button>);
};

export default GenreList;
