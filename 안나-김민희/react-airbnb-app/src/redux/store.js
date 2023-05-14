import { configureStore } from "@reduxjs/toolkit";
import likeSlice from "./likeSlice";

export const store = configureStore({
  reducer: {
    likes: likeSlice,
  },
});
