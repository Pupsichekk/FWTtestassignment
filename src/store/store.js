import { configureStore } from "@reduxjs/toolkit";
import paginationSlice from "./pagination-slice";
import paintingSlice from "./painting-slice";

const store = configureStore({
  reducer: {
    pagination: paginationSlice.reducer,
    painting: paintingSlice.reducer,
  },
});

export default store;
