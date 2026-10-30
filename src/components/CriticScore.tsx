import { Badge } from "@chakra-ui/react";

interface Props {
  score: number | null;
}

const CriticScore = ({ score }: Props) => {
  if (score === null) return null;
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge
      aria-label={`Metacritic score ${score}`}
      colorScheme={color}
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
