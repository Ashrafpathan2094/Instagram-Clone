import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import usePostComment from "../../hooks/usePostComment";
import { Comment } from "../Comment/Comment";

const CommentsModal = ({ isOpen, onClose, post }) => {
  const { handlePostComment, isCommenting } = usePostComment();
  const commentsContainerRef = useRef<HTMLDivElement>(null);

  const [commentVal, setCommentVal] = useState("");
  const handleSubmitComment = async (e) => {
    e.preventDefault();
    await handlePostComment(post?.id, commentVal);
    setCommentVal("");
  };

  useEffect(() => {
    const scrollToBottom = () => {
      if (commentsContainerRef.current) {
        commentsContainerRef.current.scrollTop =
          commentsContainerRef.current.scrollHeight;
      }
    };

    if (isOpen) {
      setTimeout(() => {
        scrollToBottom();
      }, 100);
    }
  }, [isOpen, post?.comments?.length]);
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInLeft">
      <ModalOverlay />
      <ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
        <ModalHeader>Comments</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Flex
            mb={4}
            gap={4}
            flexDir={"column"}
            maxH={"250px"}
            overflowY={"auto"}
            ref={commentsContainerRef}
          >
            {post?.comments?.length > 0 &&
              post?.comments?.map((comment, index) => (
                <Comment key={index} comment={comment} />
              ))}
          </Flex>
          <form onSubmit={handleSubmitComment} style={{ marginTop: "2rem" }}>
            <Input
              placeholder="Comment"
              size={"sm"}
              onChange={(e) => setCommentVal(e.target.value)}
              value={commentVal}
            />
            <Flex w={"full"} justifyContent={"flex-end"}>
              <Button
                type="submit"
                ml={"auto"}
                size={"sm"}
                my={4}
                isLoading={isCommenting}
              >
                Post
              </Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CommentsModal;
