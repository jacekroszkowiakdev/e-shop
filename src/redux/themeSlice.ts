import { ThemeState } from "../ts/interfaces/ThemeState";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ThemeState = {
    darkmode: localStorage.getItem("darkmode") === "true",
};

const themeSlice = createSlice({
    name: "theme",
    initialState: initialState,
    reducers: {
        toggleDarkmode: (state) => {
            state.darkmode = !state.darkmode;
            localStorage.setItem("darkmode", state.darkmode.toString());
        },
    },
});

export const { toggleDarkmode } = themeSlice.actions;
export default themeSlice.reducer;
