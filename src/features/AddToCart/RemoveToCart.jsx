import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { removeToCart } from './addToCartSlice';
import { useDispatch, useSelector } from 'react-redux';

RemoveToCart.propTypes = {
  id: PropTypes.number.isRequired,
};

function RemoveToCart(props) {
  const { id } = props;
  const dispatch = useDispatch();
  const listCart = useSelector(state => state.listCart)
  console.log(listCart)
  const handleRemoveToCart = () => {
    let indexRemove
    listCart.forEach((item,index) => {
        if(item.id === id) {
            indexRemove = index;
        }
    })
    if (indexRemove !== undefined) {
      const action = removeToCart(indexRemove);
      dispatch(action);
    }
  };
  return (
    <button className="btn btn-primary btn-add-to-cart" onClick={handleRemoveToCart}>
      Remove To Cart
    </button>
  );
}

export default RemoveToCart;
