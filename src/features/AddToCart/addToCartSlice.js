const { createSlice } = require('@reduxjs/toolkit');

const addToCartSlice = createSlice({
  name: 'addToCart',
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeToCart(state, action) {
      state.splice(action.payload,1)
    },
  },
});

const { actions, reducer } = addToCartSlice;
export const { addToCart, removeToCart } = actions;
export default reducer;
