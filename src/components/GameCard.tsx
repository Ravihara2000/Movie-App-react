import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image,  } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScorec from "./CriticScore";
import getOptimizedImageUrl from "../services/image-url";
interface GameCardProps {
  game: Game;
}
export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root borderRadius={"10px"} overflow={"hidden"}>
      <Image src={getOptimizedImageUrl(game.background_image)} alt={game.background_image} />
      <CardBody>
        <Heading>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
        <PlatformIconList platforms={game.platforms.map((p) => p.platform)} />
          <CriticScorec score={game.metacritic} />
          </HStack>
      </CardBody>
    </Card.Root>
  );
};
