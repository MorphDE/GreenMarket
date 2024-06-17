import "./ProductCard.css";

const ProductCard = () => {
    return (
        <section className="productcard-container">
            <div className="product-card">
                <i className="fa-solid fa-heart"></i>
                <img src="./bread.jpg" alt="Product Image" />
                <p className="item-name">ITEM NAME</p>
                <div className="product-bottom">
                    <div>
                        <p>100€</p>
                    </div>
                    <div className="product-rating">
                        <i className="fa-solid fa-star"></i>
                        <p>5.0</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default ProductCard;