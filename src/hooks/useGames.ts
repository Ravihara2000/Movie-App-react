
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string; //read the api doc
  platforms: { platform: Platform }[]; //object array type
  metacritic: number;
}

const useGames = () => useData<Game>(`/games`);


export default useGames;
