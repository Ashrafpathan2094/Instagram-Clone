import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeaders from "./SuggestedHeaders";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6}>
      <SuggestedHeaders />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          color={"gray.400"}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>
      {/* <UsersSuggested name="aashu.exe" followers={1243} avatar="img1.png" />
      <UsersSuggested name="Stw_stark" followers={1913} avatar="img2.png" />
      <UsersSuggested name="Bread_siar" followers={1813} avatar="img3.png" /> */}

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2023 Built By{" "}
        <Link href="/" target="_blank" color="blue.500" fontSize={14}>
          Array_Ashraf
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
