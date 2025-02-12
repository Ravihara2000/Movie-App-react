import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
function App() {
  const showSidebar = useBreakpointValue({ base: false, lg: true });
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav " "main" "footer"`,
          lg: `"nav nav " "aside main" "footer footer"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        {showSidebar && (
          <GridItem area="aside" >
            <GenreList/>
          </GridItem>
        )}
        <GridItem area="main">
          <GameGrid />
        </GridItem>
        <GridItem area="footer" bg={"brown"}>
        footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
