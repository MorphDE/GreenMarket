import "./ProductDetails.css";
import GoBack from "./../../Components/GoBack/GoBack";
import CartIcon from "../../../public/cart.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backendUrl } from "../../api/api";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    fetch(`${backendUrl}/api/v1/products/getProductById/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <section className="productdetails-container">
      <GoBack title={"Back"} />
      <div className="details-top">
        <img
          src={`${backendUrl}/api/v1/uploads/product-images/${product?.image}`}
          alt="Product Image"
        />
        <p className="product-weight-btn">
          {quantity}{product?.unit}
        </p>
        <p className="product-price">${(product?.price * quantity).toFixed(2)}</p>
        <h1 className="product-name">{product?.name}</h1>
        <div className="product-rating">
          <i className="fa-solid fa-star"></i>
          <p>{product?.rating.toFixed(1)}</p>
          <p>Reviews ({product?.ratingAmount})</p>
        </div>
      </div>
      <div className="balken"></div>
      <div className="details-bottom">
        <p>Quantity</p>
        <div className="details-amount">
          <i
            className={`fa-solid fa-square-minus ${quantity === 1 ? 'disabled' : ''}`}
            onClick={handleDecrement}
          ></i>
          <p className="item-amount">{String(quantity).padStart(2, '0')}</p>
          <i className="fa-solid fa-square-plus" onClick={handleIncrement}></i>
        </div>
        <img src={CartIcon} alt="Cart Icon" />
      </div>
      <button className="btn-light">Add to Cart</button>
    </section>
  );
};

export default ProductDetails;
