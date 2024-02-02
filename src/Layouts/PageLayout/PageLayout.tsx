import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { PageLayoutProps } from "../../Utils/types";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import Navbar from "../../components/FeedPosts/Navbar";

const PageLayout = ({ children }: PageLayoutProps) => {
  const { pathname } = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, loading, error] = useAuthState(auth);
  const canRenederSidebar = pathname !== "/auth" && user;
  const canRenderNavbar = !user && !loading && pathname !== "/auth";
  const checkingUserIsAuth = !user && loading;
  if (checkingUserIsAuth) return <PageLayutSpinner />;
  return (
    <Flex flexDir={canRenderNavbar ? "column" : "row"}>
      {canRenederSidebar && (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      )}
      {canRenderNavbar ? <Navbar /> : null}
      <Box
        flex={1}
        w={{ base: "calc(100%-70px", md: "calc(100%-120px" }}
        mx={"auto"}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;

const PageLayutSpinner = () => {
  return (
    <Flex
      flexDir="column"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner size="xl" />
    </Flex>
  );
};
