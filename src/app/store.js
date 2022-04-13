import { configureStore } from '@reduxjs/toolkit';
import addToCartReducer from 'features/AddToCart/addToCartSlice';

const rootReducer = {
  listCart: addToCartReducer,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;