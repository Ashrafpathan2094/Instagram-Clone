import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";


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

  const signup = async (inputs: SignupInputs) => {
    if (!inputs.email || !inputs.userName || !inputs.fullName || !inputs.password) {

      console.log("fill all the fields");
      return
    }
    try {

      const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)
      if (!newUser && error) {
        console.log('error', error)
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
      }

    } catch (error) {
      console.log('error', error)
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
