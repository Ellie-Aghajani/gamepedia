import {
  Button,
  Center,
  Heading,
  Icon,
  Image,
  List,
  ListItem,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { BsGrid } from "react-icons/bs";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading)
    return (
      <Stack spacing={2}>
        {[...Array(12).keys()].map((key) => (
          <Skeleton key={key} height="40px" borderRadius={8} />
        ))}
      </Stack>
    );

  const renderButton = (
    label: string,
    icon: JSX.Element,
    isSelected: boolean,
    onClick: () => void
  ) => (
    <Button
      aria-pressed={isSelected}
      height="auto"
      isActive={isSelected}
      justifyContent="flex-start"
      leftIcon={icon}
      onClick={onClick}
      paddingX={2}
      paddingY={1}
      textAlign="left"
      variant="ghost"
      whiteSpace="normal"
      width="100%"
    >
      {label}
    </Button>
  );

  return (
    <>
      <Heading as="h2" fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        <ListItem paddingY="2px">
          {renderButton(
            "All genres",
            <Center boxSize="32px">
              <Icon as={BsGrid} boxSize={5} />
            </Center>,
            !selectedGenre,
            () => onSelectGenre(null)
          )}
        </ListItem>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="2px">
            {renderButton(
              genre.name,
              <Image
                alt=""
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />,
              genre.id === selectedGenre?.id,
              () => onSelectGenre(genre)
            )}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
