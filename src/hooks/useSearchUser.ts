import { collection, getDocs, query, where, startAt, endAt } from "firebase/firestore";
import { useState } from "react";
import { firestore } from "../firebase/firebase";
import useShowToast from "./useShowToast";

const useSearchUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const showToast = useShowToast();

  const getUserProfile = async (searchString) => {
    try {
      setIsLoading(true);
      setUser(null);

      const q = query(
        collection(firestore, "users"),
        where("userName", ">=", searchString),
        where("userName", "<=", searchString + "\uf8ff")
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        throw new Error("No user found!");
      }

      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsLoading(false);
    }
  };
  
  return { isLoading, getUserProfile, user, setUser };
};

export default useSearchUser;
