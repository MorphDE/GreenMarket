import "./ProductDetails.css";
import GoBack from "./../../Components/GoBack/GoBack";
import CartIcon from "../../../public/cart.png";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../Context/Contexts";
import { useParams } from "react-router-dom";
import { backendUrl } from "../../api/api";

const ProductDetails = () => {
  const { products, setProducts } = useContext(ProductContext);

  const { id } = useParams();

  useEffect(() => {
    fetch(`${backendUrl}/api/v1/products/getProductById/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="productdetails-container">
      <GoBack title={"Back"} />
      <div className="details-top">
        <img src={products?.image} alt="Product Image" />
        <p className="product-weight-btn">{products?.unit}</p>
        <p className="product-price">{products?.price}</p>
        <h1 className="product-name">{products?.name}</h1>
        <div className="product-rating">
          <i className="fa-solid fa-star"></i>
          <p>
            {products?.rating}
            {products?.ratingAmount}
          </p>
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
};

export default ProductDetails;
