import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Post from "./Post";

const ProfilePost = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Grid
      templateColumns={{ sm: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
        [0, 1, 2, 3, 4, 5].map((_, idx) => (
          <VStack key={idx}>
            <Skeleton w={"full"}>
              <Box h={"300px"}>contents Wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          <Post img="img1.png" />
          <Post img="img2.png" />
          <Post img="img3.png" />
          <Post img="img4.png" />
        </>
      )}
    </Grid>
  );
};

export default ProfilePost;
