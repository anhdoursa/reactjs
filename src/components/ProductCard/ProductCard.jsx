import AddToCart from 'features/AddToCart/AddToCart';
import PropTypes from 'prop-types';

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
};

function ProductCard(props) {
    const { product } = props;
    return (
        <div className="product-card">
            <div className="product-card__image">
                <img src={product.thumbnailUrl} alt={product.title} />
            </div>
            <div className="product-card__content">
                <h6>{product.title}</h6>
                <p>{product.price}</p>
                <AddToCart product={product} />
            </div>
        </div>
    );
}

export default ProductCard;