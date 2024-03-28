import { Box, Image } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";

const Post = ({ post }) => {
  const { userProfile } = useGetUserProfileById(post?.createdBy);
  return (
    <>
      <PostHeader post={post} createrProfile={userProfile} />
      <Box my={2} overflow={"hidden"} borderRadius={4}>
        <Image src={post?.imageURL} alt={"feed post image"} />
      </Box>
      <PostFooter post={post} createrProfile={userProfile} />
    </>
  );
};

export default Post;
