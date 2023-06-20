import { configureStore } from "@reduxjs/toolkit";
import paginationSlice from "./pagination-slice";
import paintingSlice from "./painting-slice";
import themeSlice from "./theme-slice";

const store = configureStore({
  reducer: {
    pagination: paginationSlice.reducer,
    painting: paintingSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export default store;
