import { Flex, Image, Text } from "@chakra-ui/react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../firebase/firebase";
import useShowToast from "../../hooks/useShowToast";
import useAuthStore from "../../store/authStore";

interface googleAuthType {
  prefix: string;
}
const GoogleAuth = ({ prefix }: googleAuthType) => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const showToast = useShowToast();

  const loginUser = useAuthStore((state: any) => state.login);
  const handleGoogleAuth = async () => {
    try {
      const newUser = await signInWithGoogle();
      if (!newUser) {
        return showToast("Error", error?.message, "error");
      }

      const userRef = doc(firestore, "users", newUser.user.uid);
      const userSnap = await getDoc(userRef);
      let userDoc;
      if (userSnap.exists()) {
        //login
        userDoc = userSnap.data();
      } else {
        //signup  
        userDoc = {
          uid: newUser.user.uid,
          email: newUser.user.email,
          userName: newUser.user.email?.split("@")[0],
          fullName: newUser.user.displayName,
          bio: "",
          proflePicURL: newUser.user.photoURL,
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
      }
      localStorage.setItem("user-info", JSON.stringify(userDoc));
      loginUser(userDoc);
    } catch (error: any) {
      showToast("Error", error?.message, "error");
    }
  };
  return (
    <>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        cursor={"pointer"}
        onClick={handleGoogleAuth}
      >
        <Image src="/google.png" width={5} alt="google logo" />
        <Text mx={2}>{prefix} With Google</Text>
      </Flex>
    </>
  );
};

export default GoogleAuth;
