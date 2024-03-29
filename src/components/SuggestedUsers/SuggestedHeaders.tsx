import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/authStore";

const SuggestedHeaders = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const authUser = useAuthStore((state: any) => state.user);
  if (!authUser) return null;
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link to={`${authUser.userName}`}>
          <Avatar size={"lg"} src={authUser?.profilePicURL} />
        </Link>
        <Link to={`${authUser.userName}`}>
          <Text fontSize={12} fontWeight={"bold"}>
            {authUser?.userName}
          </Text>
        </Link>
      </Flex>
      <Button
        size={"xs"}
        background={"transparent"}
        _hover={{ background: "transparent" }}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        onClick={handleLogout}
        isLoading={isLoggingOut}
      >
        Log out
      </Button>
    </Flex>
  );
};

export default SuggestedHeaders;
