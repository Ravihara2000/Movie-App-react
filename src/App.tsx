import { Button } from "./components/ui/button";
import {
  Grid,
  GridItem,
  HStack,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";
function App() {
  const showSidebar = useBreakpointValue({ base: false, lg: true });
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav " "main"`,
          lg: `"nav nav " "aside main"`,
        }}
      >
        <GridItem area="nav" bg={"blue"}>
          NavBar
        </GridItem>
        {showSidebar && (
          <GridItem area="aside" bg={"red"}>
            Side Bar
          </GridItem>
        )}

        <GridItem area="main" bg={"green"}>
          Main content
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
