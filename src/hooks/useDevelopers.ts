import useData from "./useData";

export interface Developer {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useDevelopers = () => {
  return useData<Developer>("/developers");
};

export default useDevelopers;
