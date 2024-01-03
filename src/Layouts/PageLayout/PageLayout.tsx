import { Box, Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { PageLayoutProps } from "../../Utils/types";
import Sidebar from "../../components/Sidebar/Sidebar";

const PageLayout = ({ children }: PageLayoutProps) => {
  const { pathname } = useLocation();
  return (
    <Flex>
      {pathname !== "/auth" && (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      )}
      <Box flex={1} w={{ base: "calc(100%-70px", md: "calc(100%-120px" }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
