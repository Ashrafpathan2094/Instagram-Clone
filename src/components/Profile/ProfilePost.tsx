import { Box, Flex, Grid, Skeleton, Text, VStack } from "@chakra-ui/react";
import useGetUserPosts from "../../hooks/useGetUserPosts";
import Post from "./Post";

const ProfilePost = () => {
  const { isLoading, posts } = useGetUserPosts();

  const noPostsFound = !isLoading && posts?.length === 0;
  if (noPostsFound) {
    return <NoPostsFound />;
  }
  return (
    <Grid
      templateColumns={{ sm: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
        [0, 1, 2].map((_, idx) => (
          <VStack key={idx}>
            <Skeleton w={"full"}>
              <Box h={"300px"}>contents Wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </>
      )}
    </Grid>
  );
};

export default ProfilePost;

const NoPostsFound = () => {
  return (
    <Flex flexDir="column" textAlign={"center"} mx={"auto"} mt={10}>
      <Text fontSize={"2xl"}>No Post Found</Text>
    </Flex>
  );
};
