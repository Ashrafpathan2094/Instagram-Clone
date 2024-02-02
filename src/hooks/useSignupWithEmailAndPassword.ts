import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";


interface SignupInputs {
  email: string;
  userName: string;
  fullName: string;
  password: string;
}
const useSignupWithEmailAndPassword = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const showToast = useShowToast()
  const loginUser = useAuthStore(state => state?.login)
  // const logoutUser = useAuthStore(state => state?.logout)



  const signup = async (inputs: SignupInputs) => {
    if (!inputs.email || !inputs.userName || !inputs.fullName || !inputs.password) {
      showToast("Error", "Please Fill all the Fields", 'error')
      return
    }

    const usersRef = collection(firestore, "users");

    const q = query(usersRef, where("userName", "==", inputs.userName));
    const querySnapshot = await getDocs(q);

    console.log('querySnapshot', querySnapshot)
    if (!querySnapshot.empty) {
      showToast("Error", "Username already exists", "error");
      return;
    }
    try {

      const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)
      if (!newUser && error) {
        showToast("Error", error?.message, 'error')

        return
      }
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          userName: inputs.userName,
          fullName: inputs.fullName,
          bio: "",
          proflePicURL: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now()
        }
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc))
        loginUser(userDoc)

      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log('error', error)
      showToast("Error", error?.message, 'error')
    }

  }
  return {
    createUserWithEmailAndPassword,
    user,
    loading,
    error, signup
  };
};

export default useSignupWithEmailAndPassword;
