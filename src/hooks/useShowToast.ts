import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

const useShowToast = () => {
  const toast = useToast();

  // useCallback is to prevent infinte loop and also to cache the function
  const showToast = useCallback(
    (
      title: string,
      description: any,
      status: "info" | "warning" | "success" | "error" | "loading"
    ) => {
      toast({
        title: title,
        description: description,
        status: status,
        duration: 3000,
        isClosable: true,
      });
    },
    [toast]
  );

  return showToast;
};

export default useShowToast;
