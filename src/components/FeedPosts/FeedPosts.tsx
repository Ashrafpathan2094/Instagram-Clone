import {
  Box,
  Container,
  Flex,
  Image,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import Post from "./Post";

interface FeedPostsProps {
  img: string;
  username: string;
  avatar: string;
}
const FeedPosts: React.FC<FeedPostsProps> = ({ img, username, avatar }) => {
  const { isLoading, posts } = useGetFeedPosts();

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={"10"} />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height={"10px"} w={"200px"} />
                <Skeleton height={"10px"} w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"400px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading &&
        posts.length > 0 &&
        posts.map((post: any) => <Post post={post} />)}

      {!isLoading && posts?.length === 0 && (
        <Text fontFamily={"md"} color={"white"}>
          No Posts!! Follow people to See what they are doing
        </Text>
      )}
    </Container>
  );
};

export default FeedPosts;
