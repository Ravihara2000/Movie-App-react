import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
interface GameCardProps{
    game:Game;
}
export const GameCard = ({game}:GameCardProps) => {
  return (
   <Card.Root borderRadius={"10px"} overflow={"hidden"}>
    <Image src={game.background_image}/>
    <CardBody>
        <Heading>{game.name}</Heading>
    </CardBody>
   </Card.Root>
  )
}
