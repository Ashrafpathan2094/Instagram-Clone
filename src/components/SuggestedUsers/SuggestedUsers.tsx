import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeaders from "./SuggestedHeaders";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";
import UsersSuggested from "./UsersSuggested";

const SuggestedUsers = () => {
  const { isLoading, suggestedUsersList } = useGetSuggestedUsers();
  if (isLoading) {
    return null;
  }
  return (
    <VStack py={8} px={6}>
      <SuggestedHeaders />
      {suggestedUsersList && suggestedUsersList.length !== 0 && (
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
      )}
      {suggestedUsersList.map((user) => (
        <UsersSuggested userData={user} key={user.id} />
      ))}

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
