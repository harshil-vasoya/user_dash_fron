import { configureStore } from "@reduxjs/toolkit";
import teamReducer from "./teamStore.js";

export default configureStore({
  reducer: {
    teamState: teamReducer,
  },
});
