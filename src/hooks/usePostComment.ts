import { useState } from "react";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import usePostStore from "../store/postStore";

const usePostComment = () => {
  const [isCommenting, setIsCommenting] = useState(false);
  const showToast = useShowToast();
  const authUser = useAuthStore((state: any) => state.user);

  const addComment = usePostStore((state: any) => state.addComment);

  const handlePostComment = async (postId, comment) => {
    if (isCommenting) {
      return;
    }
    if (!authUser) {
      showToast("Error", "You must be logged-In to comment ", "error");
    }
    try {
      setIsCommenting(true);
      const newComment = {
        comment,
        createdAt: Date.now(),
        createdBy: authUser.uid,
        postId,
      };
      await updateDoc(doc(firestore, "posts", postId), {
        comments: arrayUnion(newComment),
      });
      addComment(postId, newComment);
    } catch (error) {
      showToast("Error", error?.message, "error");
    } finally {
      setIsCommenting(false);
    }
  };
  return { isCommenting, handlePostComment };
};

export default usePostComment;
