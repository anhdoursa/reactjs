import { useEffect, useState } from 'react';
import productApi from '../../api/productApi';
import ProductCard from '../ProductCard/ProductCard';

function ShopPage(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await productApi.getAll();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="product-lists">
      <div className="container">
        <div className="row">
          {products.length > 0 &&
            products.map((product) => (
              <div className="col col-3" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
