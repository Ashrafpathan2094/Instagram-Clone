import { create } from "zustand";

const useUserProfileStore = create((set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }),
  // this is used to update the number of posts in the profile page
  addPost: (post) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        post: [post.id, ...state.userProfile.posts],
      },
    })),
}));

export default useUserProfileStore;
