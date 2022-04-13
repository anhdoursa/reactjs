import ProductCard from 'components/ProductCard/ProductCard';
import React from 'react';
import { useSelector } from 'react-redux';
function CartPage(props) {
    const listCart = useSelector(state => state.listCart)
    console.log(listCart)
    return (
        <div className="product-cart">
            <div className="container">
                CartPage
                <div className="row">
                {listCart.length > 0 && listCart.map(product => (
                    <div className="col col-3" key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default CartPage;