import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './addToCartSlice';

AddToCart.propTypes = {
  product: PropTypes.object.isRequired,
};

function AddToCart(props) {
  const { product } = props;
  const dispatch = useDispatch();
  const listCart = useSelector((state) => state.listCart);
  // console.log(listCart)
  const handleAddToCart = () => {
    const action = addToCart(product);
    dispatch(action);
  };
  return (
    <button className="btn btn-primary btn-add-to-cart" onClick={handleAddToCart}>
      Add To Cart
    </button>
  );
}

export default AddToCart;
