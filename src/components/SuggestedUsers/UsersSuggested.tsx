import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import useFollowUser from "../../hooks/useFollowUser";
import useAuthStore from "../../store/authStore";

interface UsersSuggestedProps {
  userData: {
    userName: string;
    followers: string[]; // Array of strings
    profilePicURL: string;
    uid: string;
  };
  setUser: (userData: any) => void;
}
const UsersSuggested = ({ userData, setUser }: UsersSuggestedProps) => {
  const authUser = useAuthStore((state) => state.user);
  const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(
    userData.uid
  );

  const onFollowUser = async () => {
    await handleFollowUser();
    setUser({
      ...userData,
      followers: isFollowing
        ? userData.followers.filter(
            (follower: any) => follower !== authUser.uid
          )
        : [...userData.followers, authUser.uid],
    });
  };
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignContent={"center"} gap={2}>
        <Avatar
          src={userData.profilePicURL}
          name={userData.userName}
          size={"md"}
        />
        <VStack spacing={2} alignItems={"flex-start"}>
          <Box fontSize={12} fontWeight={"bold"}>
            {userData.userName}
          </Box>
          <Box fontSize={11} color={"gray.500"}>
            {userData.followers.length} followers
          </Box>
        </VStack>
      </Flex>

      {authUser.uid !== userData?.uid && (
        <Button
          fontSize={13}
          bg={"transparent"}
          p={0}
          h={"max-content"}
          fontWeight={"medium"}
          color={"blue.400"}
          _hover={{ color: "white" }}
          onClick={onFollowUser}
          isLoading={isUpdating}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      )}
    </Flex>
  );
};

export default UsersSuggested;
