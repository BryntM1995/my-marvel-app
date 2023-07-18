import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import md5 from "md5";

const publicKey = "14d857fe5dbd1014e13b86a5650aaa0a";
const privateKey = "2a987b72619d211eab4a46e662c4f074b3720a22";
const baseURL = "https://gateway.marvel.com/v1/public";

const getHash = (timestamp) => {
  const hash = md5(`${timestamp}${privateKey}${publicKey}`);
  return hash;
};

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const timestamp = new Date().getTime().toString();
  const hash = getHash(timestamp);
  try {
    const response = await axios.get(`${baseURL}/characters`, {
      params: {
        ts: timestamp,
        apikey: publicKey,
        hash: hash,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error("Something went wrong!");
  }
});

export const marvelDataSlice = createSlice({
  name: "marvelData",
  initialState: {
    loading: false,
    error: null,
    data: null,
    character: null,
  },
  reducers: {
    setCharacter: (state, action) => {
      state.character = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.data = null;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = null;
    });
  },
});

export const { setCharacter } = marvelDataSlice.actions;
export default marvelDataSlice.reducer;
