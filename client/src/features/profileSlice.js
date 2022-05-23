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

    }
  }

})
  

export const selectCurrentProfile = (state) => state.profile;
export default profileSlice.reducer;