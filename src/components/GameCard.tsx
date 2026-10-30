import { Game } from "../hooks/useGames";
import {
  AspectRatio,
  Card,
  CardBody,
  Center,
  HStack,
  Heading,
  Icon,
  Image,
} from "@chakra-ui/react";
import { BsController } from "react-icons/bs";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card height="100%">
      <AspectRatio ratio={3 / 2}>
        {game.background_image ? (
          <Image
            src={getCroppedImageUrl(game.background_image)}
            alt={game.name}
            loading="lazy"
          />
        ) : (
          <Center bg="gray.600" aria-hidden>
            <Icon as={BsController} boxSize={10} color="gray.400" />
          </Center>
        )}
      </AspectRatio>
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={2}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform) ?? []}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading as="h2" fontSize="xl" noOfLines={2}>
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
