import RemoveToCart from 'features/AddToCart/RemoveToCart';
import React from 'react';
import { useSelector } from 'react-redux';
import './Cart.css';
function Cart(props) {
  const listCart = useSelector((state) => state.listCart);
  return (
    <div className="header-cart">
      <button>Cart Icon</button>
      {listCart.length > 0 && 
      <div className="cart-content">
        {listCart.map((product) => (
          <div key={product.id}>
            <h6>{product.title}</h6>
            <p>{product.price}</p>
            <RemoveToCart id={product.id} />
          </div>
        ))}
      </div>
      }
      
    </div>
  );
}

export default Cart;
