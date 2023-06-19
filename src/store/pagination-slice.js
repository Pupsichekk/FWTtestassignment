import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    curPage: 1,
  },
  reducers: {
    updatePage(state, action) {
      state.curPage = action.payload;
    },
  },
});

export const paginationActions = paginationSlice.actions;
export default paginationSlice;
