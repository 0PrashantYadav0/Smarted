import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: JSON.parse(localStorage.getItem("authStatus") || "false"),
    userData: JSON.parse(localStorage.getItem("userData") || "null")
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;

            // Save to localStorage
            localStorage.setItem("authStatus", JSON.stringify(true));
            localStorage.setItem("userData", JSON.stringify(action.payload.userData));
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;

            // Remove from localStorage
            localStorage.removeItem("authStatus");
            localStorage.removeItem("userData");
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
