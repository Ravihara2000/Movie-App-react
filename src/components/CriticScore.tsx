import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}
const CriticScore = ({ score }: CriticScoreProps) => {
    const color = score > 89 ? "green" : score > 60 ? "yellow" : ""
  return (
    <Badge
      fontSize={"14px"}
      paddingX={2}
      fontWeight={"bold"}
      borderRadius={"4px"}
      color={color}

    >
      {score}
    </Badge>
  );
};

export default CriticScore;
