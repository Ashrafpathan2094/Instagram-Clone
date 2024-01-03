import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface PostHeaderProps {
  avatar: string;
  username: string;
}
const PostHeader = ({ avatar, username }: PostHeaderProps) => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={"2"}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} size={"sm"} />
        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
          {username}
          <Box color={"gray.500"}>• 1w</Box>
        </Flex>
      </Flex>
      <Box
        cursor={"pointer"}
        fontSize={12}
        color={"blue.500"}
        fontWeight={"bold"}
        _hover={{ color: "white" }}
        transition={"0.2s ease-in-out"}
      >
        <Text>Unfollow</Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
