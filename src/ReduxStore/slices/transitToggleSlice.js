import { createSlice } from "@reduxjs/toolkit";

const transitToggleSlice = createSlice({
  name: "transitToggleStatus",

  initialState: {
    status: true,
  },
  reducers: {
    setTransitToggleStatus: (state) => {
      state.status = !state.status;
    },
  },
});

export const { setTransitToggleStatus } = transitToggleSlice.actions;

export default transitToggleSlice.reducer;
