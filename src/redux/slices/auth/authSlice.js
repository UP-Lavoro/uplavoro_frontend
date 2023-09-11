import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    error: "",
    token: null,
    user_id: "",
    isAuthenticated: false,
    message: "",
    expires: '',
    sessionStart: false,
  },
  reducers: {
    authRequestLoading: (state, action) => {
      state.isLoading = true;
      state.error = "";
      state.token = "";
      state.isAuthenticated = false;
    },
    invalidRequest: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    login: (state, action) => {
      state.token = action.payload.token;
      state.user_id = action.payload.user.id;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = "";
      state.message = "Login Success";
      state.expires = action?.payload?.expires ? action?.payload?.expires : '';
    },
    logout: (state) => {
      state.user_id = "";
      state.token = null;
      state.isLoading = false;
      state.error = "";
      state.message = "Logout Success";
      state.isAuthenticated = false;
    },
    register: (state, action) => {
      state.token = action.payload.data.token;
      state.user_id = action.payload.data.id;
      state.isLoading = false;
      state.error = "";
      state.message = "Registered Successfully.";
      state.sessionStart = false
    },
    thirdPartyUserState: (state, action) =>{
      state.sessionStart = true
      state.isLoading = false
    },
    thirdPartyUserStateClose: (state, action) => {
      state.sessionStart = false
      state.isLoading = false;
    },
    recoverPassword: (state, action) => {
      state.isLoading = false;
    }
  },
});

export default authSlice.reducer;
export const {
  authRequestLoading,
  invalidRequest,
  login,
  logout,
  registerPolicy,
  register,
  forgotPassword,
  resetPassword,
  reloadPage,
  thirdPartyUserState,
  thirdPartyUserStateClose,
  recoverPassword
} = authSlice.actions;
