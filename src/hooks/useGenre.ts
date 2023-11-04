import useData from "./useData";

interface FetchGenresResponse {
  count: number;
  next: string;
  previous: string;
  results: Genre[];
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useGenre = () => {
  const { data, error, isLoading } = useData<Genre>("/genres");
  return { data, error, isLoading };
};

export default useGenre;
