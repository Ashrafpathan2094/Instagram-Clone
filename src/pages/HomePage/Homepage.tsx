import { Box, Container, Flex } from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          {/* TODO: change the props as an object later */}
          <FeedPosts
            img="/img1.png"
            username="Array_Ashraf"
            avatar="/img1.png"
          />
          <FeedPosts img="/img2.png" username="aashu.exe" avatar="/img2.png" />
          <FeedPosts
            img="/img3.png"
            username="Stw_Stark"
            avatar="/img3.png"
          />{" "}
          <FeedPosts
            img="/img4.png"
            username="Buss_Kar_Ashraf"
            avatar="/img4.png"
          />
        </Box>
        <Box
          flex={3}
          py={20}
          display={{ base: "none", lg: "block" }}
          maxW={"300px"}
        >
          <SuggestedUsers />
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
