import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constant";
import useLikePost from "../../hooks/useLikePost";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore";
import { timeAgo } from "../../Utils/getTimeAgo";
import CommentsModal from "../Modals/CommentsModal";

interface PostFooterProps {
  username?: string;
  isProfilePage?: boolean;
  post: any;
  createrProfile?: any;
}
const PostFooter = ({
  post,
  username,
  isProfilePage = false,
  createrProfile,
}: PostFooterProps) => {
  const [comment, setComment] = useState("");

  const commentRef = useRef(null);

  const { isCommenting, handlePostComment } = usePostComment();
  const authUser = useAuthStore((state: any) => state.user);
  const { handleLikePost, isLiked, isUpdating, likes } = useLikePost(post);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    await handlePostComment(post?.id, comment);
    setComment("");
  };
  return (
    <Box mb={10} marginTop={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
        <Box onClick={handleLikePost} cursor={"pointer"} fontSize={18}>
          {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box
          cursor={"pointer"}
          fontSize={18}
          onClick={() => commentRef.current.focus()}
        >
          <CommentLogo />
        </Box>
      </Flex>

      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>
      {isProfilePage && (
        <Text fontSize={"12"} color={"gray"}>
          Posted {timeAgo(post?.createdAt)}
        </Text>
      )}
      {!isProfilePage && (
        <>
          <Text fontWeight={600} fontSize={"sm"}>
            {createrProfile?.userName}
            <Text as={"span"} fontWeight={400}>
              {post?.caption}
            </Text>
          </Text>
          {post?.comments?.length > 0 && (
            <Text
              color={"gray"}
              fontSize={"sm"}
              cursor={"pointer"}
              onClick={onOpen}
            >
              View all {post?.comments?.length} Comments
            </Text>
          )}
          {isOpen ? (
            <CommentsModal isOpen={isOpen} onClose={onClose} post={post} />
          ) : null}
        </>
      )}

      {authUser && (
        <Flex
          alignItems={"center"}
          gap={2}
          justifyContent={"space-between"}
          w={"full"}
        >
          <InputGroup>
            <Input
              variant={"flushed"}
              placeholder={"Add a comment..."}
              fontSize={14}
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              ref={commentRef}
            />
            <InputRightElement>
              <Button
                fontSize={14}
                color={"blue.500"}
                fontWeight={600}
                cursor={"pointer"}
                _hover={{ color: "white" }}
                bg={"transparent"}
                isLoading={isCommenting}
                onClick={handleSubmitComment}
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      )}
    </Box>
  );
};

export default PostFooter;
