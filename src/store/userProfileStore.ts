import { create } from "zustand";

// Define your own type for SetState
type SetState<T> = (
  partial: T | Partial<T> | ((state: T) => T | Partial<T>),
  replace?: boolean | undefined
) => void;

interface UserProfileStore {
  userProfile: any; // You should replace 'any' with the actual type of userProfile
  setUserProfile: (userProfile: any) => void; // Replace 'any' with the type of userProfile
  deletePost: (postId: string) => void; // Assuming postId is a string, adjust if not
  addPost: (post: any) => void; // Replace 'any' with the type of post
}

const useUserProfileStore = create<UserProfileStore>(
  (set: SetState<UserProfileStore>) => ({
    userProfile: null,
    setUserProfile: (userProfile) => set({ userProfile }),
    deletePost: (postId) =>
      set((state: UserProfileStore) => ({
        userProfile: {
          ...state.userProfile,
          posts: state.userProfile.posts.filter((id) => id !== postId),
        },
      })),
    addPost: (post) =>
      set((state: UserProfileStore) => ({
        userProfile: {
          ...state.userProfile,
          posts: [post.id, ...state.userProfile.posts], // Fixed typo in 'post'
        },
      })),
  })
);

export default useUserProfileStore;
