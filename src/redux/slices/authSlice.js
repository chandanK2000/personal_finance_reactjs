
import { createSlice } from "@reduxjs/toolkit";

const getSavedUser = () => {
    try {
        const savedUser = localStorage.getItem("userDetails");
        return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
        console.error("Failed to restore user details:", error);
        return null;
    }
};

const initialState = {
    user: getSavedUser(),
    isAuthenticated: Boolean(
        localStorage.getItem("accessToken") && getSavedUser()
    ),
};

const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },

        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;

            localStorage.removeItem("accessToken");
            localStorage.removeItem("userDetails");
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
