import {
  Box,
  Container,
  Flex,
  Image,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import { useEffect, useState } from "react";

interface FeedPostsProps {
  img: string;
  username: string;
  avatar: string;
}
const FeedPosts: React.FC<FeedPostsProps> = ({ img, username, avatar }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={"10"} />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height={"10px"} w={"200px"} />
                <Skeleton height={"10px"} w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={500}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          <PostHeader avatar={avatar} username={username} />
          <Box my={2} overflow={"hidden"} borderRadius={4}>
            <Image src={img} alt={username} />
          </Box>
          {/* <Post /> */}
          <PostFooter username={username} />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
