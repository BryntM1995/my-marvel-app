import { configureStore } from '@reduxjs/toolkit';
import { marvelDataSlice } from './Reducers/MarvelSlice';

const store = configureStore({
  reducer: {
    data: marvelDataSlice.reducer
  }
});


export default store;