import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  criticScore: number;
}
const CriticScore = ({ criticScore }: Props) => {
  const badgeColor =
    criticScore > 90 ? "green" : criticScore > 70 ? "yellow" : "red";
  return (
    <Badge fontSize="14px" colorScheme={badgeColor}>
      {criticScore}
    </Badge>
  );
};

export default CriticScore;
