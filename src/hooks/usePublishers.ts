import useData from "./useData";

export interface Publisher {
  id: number;
  name: string;
  slug: string;
  gamesCount: number;
  image_background: string;
}

const usePublishers = () => {
  return useData<Publisher>("/publishers");
};

export default usePublishers;
