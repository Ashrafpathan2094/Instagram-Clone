import {
  Avatar,
  Box,
  Button,
  Flex,
  SkeletonCircle,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useFollowUser from "../../hooks/useFollowUser";

interface PostHeaderProps {
  post: any;
  createrProfile: any;
}
const PostHeader = ({ post, createrProfile }: PostHeaderProps) => {
  const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(
    post?.createdBy
  );
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={"2"}
    >
      <Flex alignItems={"center"} gap={2}>
        {createrProfile ? (
          <Link to={`/${createrProfile?.userName}`}>
            <Avatar src={createrProfile?.profilePicURL} size={"sm"} />
          </Link>
        ) : (
          <SkeletonCircle size={"10"} />
        )}

        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
          {createrProfile ? (
            <Link to={`/${createrProfile?.userName}`}>
              {createrProfile?.userName}
            </Link>
          ) : (
            <SkeletonCircle size={"100px"} h={"10px"} />
          )}
          <Box color={"gray.500"}>• 1w</Box>
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Button
          size={"xs"}
          bg={"transparent"}
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{ color: "white" }}
          transition={"0.2s ease-in-out"}
          onClick={handleFollowUser}
          isLoading={isUpdating}
        >
          <Text>{isFollowing ? "Unfollow" : "Follow"}</Text>
        </Button>
      </Box>
    </Flex>
  );
};

export default PostHeader;
