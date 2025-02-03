import GameGrid from "./components/GameGrid";
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
          <GridItem area="aside" bg={"red"}>
            Sidebar
          </GridItem>
        )}
        <GridItem area="main" bg={"green"}>
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
