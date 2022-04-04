import PropTypes from 'prop-types';

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
};

function ProductCard(props) {
    const { product } = props;
    return (
        <div className="product-card">
            <h4>{product.name}</h4>
            <p>{product.shortDescription}</p>
        </div>
    );
}

export default ProductCard;