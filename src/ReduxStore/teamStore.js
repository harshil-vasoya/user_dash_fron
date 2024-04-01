import { createSlice } from "@reduxjs/toolkit";

export const teamSlice = createSlice({
  name: "team",
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter(
        (users) => users.id !== action.payload
      );
    },
    clearData: (state) => {
      state.users = [];
    },
  },
});

export const { addUser, removeUser, clearData } = teamSlice.actions;

export default teamSlice.reducer;
