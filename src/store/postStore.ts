import { create } from "zustand";

interface PostStore {
  posts: any[]; // You should replace 'any' with the actual type of posts
  createPost: (post: any) => void; // Replace 'any' with the type of post
  deletePost: (id: string) => void; // Assuming id is a string, adjust if not
  setPosts: (posts: any[]) => void; // Replace 'any' with the type of posts
}

const usePostStore = create<PostStore>((set) => ({
  posts: [],
  createPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
  deletePost: (id) =>
    set((state: PostStore) => ({
      posts: state.posts.filter((post) => post.id !== id),
    })),
  setPosts: (posts) => set({ posts }),
}));
export default usePostStore;
