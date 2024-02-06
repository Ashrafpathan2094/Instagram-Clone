import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import useAuthStore from '../store/authStore';
import useShowToast from './useShowToast';

const useLogout = () => {
    const [signOut, isLoggingOut] = useSignOut(auth);
    const showToast = useShowToast()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const logoutUser = useAuthStore((state: any) => state.logout)

    const handleLogout = async () => {

        try {
            await signOut();
            localStorage.removeItem('user-info')
            logoutUser()

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            showToast("Error", error?.message, 'error')
        }

    }

    return { handleLogout, isLoggingOut }
}

export default useLogout