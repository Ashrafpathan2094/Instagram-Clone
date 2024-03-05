import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";

const useGetSuggestedUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestedUsersList, setSuggestedUsersList] = useState([]);
  const authUser = useAuthStore((state: any) => state.user);
  const showToast = useShowToast();

  useEffect(() => {
    const getSuggestedUser = async () => {
      try {
        setIsLoading(true);

        const usersRef = collection(firestore, "users");
        const q = query(
          usersRef,
          where("uid", "not-in", [authUser.uid, ...authUser.following]),
          orderBy("uid"),
          limit(3)
        );

        const querySnapshot = await getDocs(q);
        const users = [];
        querySnapshot.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });

        setSuggestedUsersList(users);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };
    if (authUser) {
      getSuggestedUser();
    }
  }, [authUser, showToast]);
  return { isLoading, suggestedUsersList };
};

export default useGetSuggestedUsers;
