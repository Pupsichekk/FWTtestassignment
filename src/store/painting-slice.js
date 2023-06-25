import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { isEmpty } from "../helpers/IsEmpty";

export const fetchPaintingData = createAsyncThunk(
  "painting/fetchPaintingData",
  async ({ page = 1, ...filters }, { dispatch }) => {
    try {
      let query = "";
      if (isEmpty(filters)) {
        query = `https://test-front.framework.team/paintings?_page=${page}&_limit=12`; // query if no filters are found
      } else {
        query = `https://test-front.framework.team/paintings?_page=${page}&_limit=12${
          filters.name && "&q=" + filters.name
        }${filters.author && "&authorId=" + filters.author}${filters.location && "&locationId=" + filters.location}${
          filters.date && "&created_gte=" + filters.date.from + "&created_lte=" + filters.date.to
        }`;
        // query if there is at least one filter
      }
      const response = await fetch(query);
      if (!response.ok) throw new Error("Could not fetch painting data");
      const data = await response.json();
      dispatch(paintingActions.setItems(data)); // setting items state
    } catch (error) {
      console.log(error);
    }
  }
);

export const getPaintingLocation = createAsyncThunk("painting/getPaintingLocation", async (id = 0) => {
  try {
    const response = await fetch(`https://test-front.framework.team/locations?id=${id}`);
    const data = await response.json();
    return data[0].location;
  } catch (err) {
    console.log(err);
  }
});

export const getPaintingAuthor = createAsyncThunk("painting/getPaintingAuthor", async (id = 0) => {
  try {
    const response = await fetch(`https://test-front.framework.team/authors?id=${id}`);
    const data = await response.json();
    return data[0].name;
  } catch (err) {
    console.log(err);
  }
});

export const fetchAllPaintingData = createAsyncThunk("painting/fetchAllPaintingData", async (filters, { dispatch }) => {
  let query = "";
  if (isEmpty(filters)) {
    query = `https://test-front.framework.team/paintings`; // query if no filters are found
  } else {
    query = `https://test-front.framework.team/paintings?${filters.name && "&q=" + filters.name}${
      filters.author && "&authorId=" + filters.author
    }${filters.location && "&locationId=" + filters.location}${
      filters.date && "&created_gte=" + filters.date.from + "&created_lte=" + filters.date.to
    }`;
    // query if there is at least one filter
  }
  const response = await fetch(query);
  if (!response.ok) throw new Error("Could not fetch painting data");
  const data = await response.json();
  dispatch(paintingActions.setAllItems(data));
});

export const fetchAllAuthorData = createAsyncThunk("painting/fetchAllAuthorData", async (_, { dispatch }) => {
  const response = await fetch("https://test-front.framework.team/authors");
  if (!response.ok) throw new Error("Could not fetch painting data");
  const data = await response.json();
  dispatch(paintingActions.setAuthors(data));
});

export const fetchAllLocationsData = createAsyncThunk("painting/fetchAllLocationsData", async (_, { dispatch }) => {
  const response = await fetch("https://test-front.framework.team/locations");
  if (!response.ok) throw new Error("Could not fetch painting data");
  const data = await response.json();
  dispatch(paintingActions.setLocations(data));
});

const paintingSlice = createSlice({
  name: "painting",
  initialState: {
    items: [],
    itemsLength: 0,
    filters: {
      name: "",
      author: "",
      location: "",
      date: "",
    },
    authors: [],
    locations: [],
  },
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },

    setFilters(state, action) {
      state.filters = {
        name: action.payload.name === undefined ? state.filters.name : action.payload.name,
        author: action.payload.author === undefined ? state.filters.author : action.payload.author,
        location: action.payload.location === undefined ? state.filters.location : action.payload.location,
        date: action.payload.dates === undefined ? state.filters.date : action.payload.dates,
      };
    },

    setAllItems(state, action) {
      state.itemsLength = action.payload.length;
    },

    setAuthors(state, action) {
      state.authors = action.payload;
    },

    setLocations(state, action) {
      state.locations = action.payload;
    },
  },
});

export const paintingActions = paintingSlice.actions;

export default paintingSlice;
