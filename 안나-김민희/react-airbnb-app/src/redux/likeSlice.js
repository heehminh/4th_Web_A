import { createSlice } from "@reduxjs/toolkit";

const initialLikeData = localStorage.getItem("newLikedRooms")
  ? JSON.parse(localStorage.getItem("newLikedRooms"))
  : [];

export const likeSlice = createSlice({
  name: "likefunction",
  initialState: initialLikeData,
  reducers: {
    toggleLike: (state, action) => {
      const index = action.payload;
      state[index] = !state[index];
      localStorage.setItem("newLikedRooms", JSON.stringify(state));
    },
  },
});

export const { toggleLike } = likeSlice.actions;
export default likeSlice.reducer;
