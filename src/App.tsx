import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import GenreSelector from "./components/GenreSelector";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortOrder: "",
    searchText: "",
  });
  const selectGenre = (genre: Genre | null) =>
    setGameQuery({ ...gameQuery, genre });
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "minmax(0, 1fr)",
        lg: "240px minmax(0, 1fr)",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={4}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={selectGenre}
          />
        </GridItem>
      </Show>

      <GridItem area="main" paddingX={{ base: 4, lg: 6 }} paddingBottom={10}>
        <Box marginBottom={6}>
          <GameHeading gameQuery={gameQuery} />
          <Flex wrap="wrap" gap={3}>
            <Show below="lg">
              <GenreSelector
                selectedGenre={gameQuery.genre}
                onSelectGenre={selectGenre}
              />
            </Show>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
