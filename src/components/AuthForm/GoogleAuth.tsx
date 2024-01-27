import { Flex, Image, Text } from "@chakra-ui/react";

const GoogleAuth = () => {
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
        <Image src="/google.png" width={5} alt="google logo" />
        <Text mx={2}>Log In With Google</Text>
      </Flex>
    </>
  );
};

export default GoogleAuth;
