import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpened: false,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpened = !current(state).isSidebarOpened;
    },
    openSidebar: (state) => {
      state.isSidebarOpened = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpened = false;
    },
  },
});

export const { toggleSidebar, openSidebar, closeSidebar } =
  settingsSlice.actions;

export default settingsSlice.reducer;
