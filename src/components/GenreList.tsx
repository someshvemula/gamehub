import {
  Button,
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import imageCropper from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenre();
  if (isLoading) {
    return <Spinner size="xl" />;
  }
  if (error) return null;
  return (
    <>
      <Text as={"b"} fontSize={"4xl"}>
        Genres
      </Text>
      {data.map((genre) => (
        <List key={genre.id}>
          <ListItem key={genre.id} paddingY={"2px"}>
            <HStack>
              <Button
                onClick={() => {
                  onSelectGenre(genre);
                }}
                padding={2}
                justifyContent={"left"}
                leftIcon={
                  <Image
                    boxSize="32px"
                    borderRadius={8}
                    src={imageCropper(genre.image_background)}
                    objectFit={"cover"}
                  ></Image>
                }
                width={"100%"}
                fontSize={"lg"}
                whiteSpace={"pre-wrap"}
                variant={selectedGenre?.id === genre.id ? "solid" : "ghost"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        </List>
      ))}
    </>
  );
};

export default GenreList;
