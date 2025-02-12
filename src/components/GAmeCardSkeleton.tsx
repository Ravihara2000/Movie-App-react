import { Card,  } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "../components/ui/skeleton";
const GAmeCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px" width={"400px"}/>
      <Card.Body>
        <SkeletonText noOfLines={2} gap={4} />
      </Card.Body>
    </Card.Root>
  );
};

export default GAmeCardSkeleton;
