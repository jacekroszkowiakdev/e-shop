import { ThemeState } from "../ts/interfaces/ThemeState";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ThemeState = {
    darkMode: localStorage.getItem("dark-mode") === "true",
};

const themeSlice = createSlice({
    name: "theme",
    initialState: initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
            localStorage.setItem("dark-mode", state.darkMode.toString());
        },
    },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
