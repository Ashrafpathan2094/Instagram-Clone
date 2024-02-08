import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";

const ProfileHeader = () => {
  const { userProfile } = useUserProfileStore();
  const authUser = useAuthStore((state: any) => state.user);
  const visitingOwnProfileAndAuth =
    authUser && authUser.userName === userProfile.userName;
  const visitingOtherProfileAndAuth =
    authUser && authUser.userName !== userProfile.userName;

  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar name={userProfile?.userName} src={userProfile?.profilePicUrl} />
      </AvatarGroup>
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>
            {userProfile?.userName}
          </Text>
          {visitingOwnProfileAndAuth && (
            <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
              <Button
                bg={"white"}
                color={"black"}
                _hover={{ bg: "whiteAlpha.800" }}
                size={{ base: "xs", md: "sm" }}
              >
                Edit Profile
              </Button>
            </Flex>
          )}

          {visitingOtherProfileAndAuth && (
            <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
              <Button
                bg={"blue.500"}
                color={"white"}
                _hover={{ bg: "blue.600" }}
                size={{ base: "xs", md: "sm" }}
              >
                Follow
              </Button>
            </Flex>
          )}
        </Flex>
        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {userProfile?.posts.length}
            </Text>
            Posts
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {userProfile?.followers.length}
            </Text>
            Following
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {userProfile?.following.length}
            </Text>
            Followers
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            {userProfile?.fullName}
          </Text>
        </Flex>
        <Text fontSize={"sm"}>{userProfile?.bio}</Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
