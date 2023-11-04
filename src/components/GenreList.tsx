import {
  Button,
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import imageCropper from "../services/image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();
  if (isLoading) {
    return <Spinner size="xl" />;
  }
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
                padding={2}
                justifyContent={"left"}
                leftIcon={
                  <Image
                    boxSize="32px"
                    borderRadius={8}
                    src={imageCropper(genre.image_background)}
                  ></Image>
                }
                width={"100%"}
                fontSize={"lg"}
                whiteSpace={"pre-wrap"}
                variant={"ghost"}
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
