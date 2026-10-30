import {
  AspectRatio,
  Card,
  CardBody,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card height="100%">
      <AspectRatio ratio={3 / 2}>
        <Skeleton />
      </AspectRatio>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
