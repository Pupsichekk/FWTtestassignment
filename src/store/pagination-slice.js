import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    curPage: 1,
    maxPage: 0,
  },
  reducers: {
    updatePage(state, action) {
      state.curPage = action.payload;
    },
    updateMaxPage(state, action) {
      state.maxPage = action.payload;
    },
  },
});

export const paginationActions = paginationSlice.actions;
export default paginationSlice;
