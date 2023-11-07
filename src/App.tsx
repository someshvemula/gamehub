import { useState } from "react";
import "./App.css";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import PublisherSelector from "./components/PublisherSelector";
import { Publisher } from "./hooks/usePublishers";
import DeveloperSelector from "./components/DeveloperSelector";
import { Developer } from "./hooks/useDevelopers";
import GameHeading from "./components/GameHeading";
import GameCardContainer from "./components/GameCardContainer";
import GameHeadingContainer from "./components/GameHeadingContainer";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [selectedPublisher, setSelectedPublisher] = useState<Publisher | null>(
    null
  );
  const [selectedDeveloper, setSelectedDeveloper] = useState<Developer | null>(
    null
  );
  const [searchText, setSearchText] = useState<string | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(searchText: string) => setSearchText(searchText)}
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} width={"200px"} paddingX={5}>
          <GenreList
            onSelectGenre={(genre: Genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameHeadingContainer>
          <GameHeading
            platform={selectedPlatform}
            publisher={selectedPublisher}
            genre={selectedGenre}
          ></GameHeading>
        </GameHeadingContainer>
        <HStack marginLeft={2}>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform: Platform) =>
              setSelectedPlatform(platform)
            }
          ></PlatformSelector>
          <PublisherSelector
            onSelectPublisher={(publisher: Publisher) =>
              setSelectedPublisher(publisher)
            }
            selectedPublisher={selectedPublisher}
          ></PublisherSelector>
          <DeveloperSelector
            onSelectDeveloper={(developer: Developer) =>
              setSelectedDeveloper(developer)
            }
            selectedDeveloper={selectedDeveloper}
          ></DeveloperSelector>
        </HStack>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          selectedPublisher={selectedPublisher}
          selectedDeveloper={selectedDeveloper}
          searchText={searchText}
        ></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
