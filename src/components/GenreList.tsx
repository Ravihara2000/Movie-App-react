import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getOptimizedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, loading,error } = useGenre();
  if(error) return null

  if(loading) return <Spinner />
  return (
    <List.Root listStyle={"none"}>
      {data.map((genre) => (
        <ListItem key={genre.id} padding={"5px"}> 
        <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}

              src={getOptimizedImageUrl(genre.image_background)}/>
              <Text fontSize={"lg"} >{genre.name}</Text>
        </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
