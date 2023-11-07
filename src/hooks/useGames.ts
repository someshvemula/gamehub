import useData from "./useData";
import { Developer } from "./useDevelopers";
import { Genre } from "./useGenre";
import { Publisher } from "./usePublishers";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
  selectedPublisher: Publisher | null,
  selectedDeveloper: Developer | null,
  searchText: string | null
) => {
  return useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
        publishers: selectedPublisher?.id,
        developers: selectedDeveloper?.id,
        search: searchText,
      },
    },
    [
      selectedGenre?.id,
      selectedPlatform?.id,
      selectedPublisher?.id,
      selectedDeveloper?.id,
      searchText,
    ]
  );
};

export default useGames;
