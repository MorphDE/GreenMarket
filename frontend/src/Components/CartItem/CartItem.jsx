import "./CartItem.css";

const CartItem = () => {
    return (
        <section className="single-item">
            <i className="fa-solid fa-heart"></i>
            <div>
                <input type="checkbox" name="check" id="checkbox" />
            </div>
            <div className="item-img">
                <img src="./bread.jpg" alt="Product Image" />
            </div>
            <div className="item-content">
                <h1>Product Name</h1>
                <div className="product-rating">
                    <p className="item-weight">1KG</p>
                    <i className="fa-solid fa-star"></i>
                    <p className="item-rate">5.0</p>
                    
                </div>
                <div className="item-bottom">
                    <p>100€ </p>
                    <div className="plus-minus">
                        <i class="fa-solid fa-square-minus"></i>
                        <p className="item-amount">01</p>
                        <i class="fa-solid fa-square-plus"></i>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default CartItem;