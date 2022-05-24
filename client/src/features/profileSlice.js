import { createSlice } from "@reduxjs/toolkit";


const initialState = {
 profile : null,
  profiles: [],
  repos: [],
  loading: true,
  error :{}
};


export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getProfile: (state, action) => {
     state.profile = action.payload;
     state.loading = false;
    },

    clearProfile: (state,action) => {

      state.profile = null;
      state.loading = false;
      state.repos = [];

    },
    profileError: (state,action) =>{
      state.error = action.payload;
      state.loading = false;
    },

    updateProfile: (state,action) => {
     state.profile = action.payload;
     state.loading = false;

    },

    getProfiles: (state,action) => {
      state.profiles = action.payload;
      state.loading = false;
 
     },

     getRepos: (state,action) => {
      state.repos = action.payload;
      state.loading = false;
 
     }
  }

})
  

export const selectCurrentProfile = (state) => state.profile;
export const selectProfiles = (state) => state.profile.profiles;
export default profileSlice.reducer;
export const selectLoading = (state) => state.profile.loading;