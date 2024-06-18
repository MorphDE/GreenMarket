import "./ProductDetails.css";
import GoBack from './../../Components/GoBack/GoBack';
import Bread from "../../../public/bread.jpg";
import CartIcon from "../../../public/cart.png";

const ProductDetails = () => {
    return (
        <section className="productdetails-container">
            <GoBack title={"Back"}/>
            <div className="details-top">
                <img src={Bread} alt="Product Image" />
                <p className="product-weight-btn">1KG</p>
                <p className="product-price">$15.00</p>
                <h1 className="product-name">Französisches Baguette</h1>
                <div className="product-rating">
                    <i className="fa-solid fa-star"></i>
                    <p>5.0 (846 Reviews)</p>
                </div>
            </div>
            <div className="balken"></div>
            <div className="details-bottom">
                <p>Quantity</p>
                <div className="details-amount">
                    <i className="fa-solid fa-square-minus"></i>
                    <p className="item-amount">01</p>
                    <i className="fa-solid fa-square-plus"></i>
                </div>
                <img src={CartIcon} alt="Cart Icon" />
            </div>
            <button className="btn-light">Add to Cart</button>
        </section>
    );
}
 
export default ProductDetails;