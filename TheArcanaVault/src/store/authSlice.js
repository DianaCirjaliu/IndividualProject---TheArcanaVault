import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAdmin: JSON.parse(localStorage.getItem("isAdmin")) || false,
  isAuthenticated: !!localStorage.getItem("user"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, isAdmin } = action.payload;
      state.user = user;
      state.isAdmin = isAdmin;
      state.isAuthenticated = true;

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isAdmin", JSON.stringify(isAdmin));
    },

    logout: (state) => {
      state.user = null;
      state.isAdmin = false;
      state.isAuthenticated = false;

      localStorage.clear();
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
