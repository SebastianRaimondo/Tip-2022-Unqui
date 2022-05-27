import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },

    postError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
      state.loading = false;
    },

    updateLikes: (state, action) => {
      state.posts = state.posts.map((post) =>
        post._id === action.payload.id
          ? { ...post, likes: action.payload.likes }
          : post
      );

      state.loading = false;
    },
  },
});

export const selectPosts = (state) => state.post.posts;
export const selectLoading = (state) => state.post.loading;

export default postSlice.reducer;
//export const selectProfiles = (state) => state.profile.profiles;
//export default profileSlice.reducer;
//export const selectLoading = (state) => state.profile.loading;
//export const selectProfile = (state) => state.profile.profile;
//export const selectRepos = (state) => state.profile.repos;
