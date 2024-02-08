import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase";
import useUserProfileStore from "../store/userProfileStore";
import useShowToast from "./useShowToast";

interface ProfileByNameType {
  userName: string;
}
const useGetUserProfileByName = ({ userName }: ProfileByNameType) => {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useShowToast();
  const { userProfile, setUserProfile } = useUserProfileStore();
  console.log("userProfile", userProfile);
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        setIsLoading(true);
        const q = query(
          collection(firestore, "users"),
          where("userName", "==", userName)
        );
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          return setUserProfile(null);
        }
        let userDoc;
        querySnapshot.forEach((doc) => {
          userDoc = doc.data();
        });
        setUserProfile(userDoc);
      } catch (error: any) {
        showToast("Error", error?.message, "error");
      } finally {
        setIsLoading(false);
      }
    };
    getUserProfile();
  }, [setUserProfile, userName, showToast]);
  return { isLoading, userProfile };
};

export default useGetUserProfileByName;
