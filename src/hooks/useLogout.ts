import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import useShowToast from './useShowToast';

const useLogout = () => {
    const [signOut, isLoggingOut] = useSignOut(auth);
    const showToast = useShowToast()

    const handleLogout = async () => {

        try {
            await signOut();
            localStorage.clear()
            console.log("user Logged out");

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            showToast("Error", error?.message, 'error')
        }

    }

    return { handleLogout, isLoggingOut }
}

export default useLogout