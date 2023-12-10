import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthFrom from "../../components/AuthForm/AuthFrom";
const Authpage = () => {
  return (
    <Flex
      minHeight={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      px={4}
    >
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={650} alt="phone-img" />
          </Box>
          <VStack spacing={4} align={"stretch"}>
            <AuthFrom />
            <Box textAlign={"center"}> Get the App.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="/playstore.png" height={10} alt="playstore logo" />
              <Image src="/microsoft.png" height={10} alt="microsoft logo" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Authpage;
