import { useEffect, useState } from "react";
import productApi from "../../api/productApi";
import ProductCard from "../ProductCard/ProductCard";

function ShopPage(props) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            const data = await productApi.getAll()
            setProducts(data)
        }
        fetchProducts()
    }, [])
    return (
        <div className="product-lists">
            <ul>
                {products.length > 0 && products.map(product => (
                    <li key={product.id}>
                        <ProductCard product={product} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShopPage;