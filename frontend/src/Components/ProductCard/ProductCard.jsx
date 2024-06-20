import { useEffect, useState } from "react";
import "./ProductCard.css";
import { backendUrl } from "../../api/api";
import { Link } from "react-router-dom";

const ProductCard = ({ imageUrl, productName, price, rating, id }) => {
  // * Favourites Toggle
  const [toggle, setToggle] = useState(false);

  return (
    <section className="productcard-container">
      <div className="product-card">
        <i
          className={`fa-solid fa-heart ${toggle ? "fa-heart-true" : ""}`}
          onClick={() => setToggle(!toggle)}
        ></i>
        <Link to={`/product/${id}`}>
          <img
            src={`${backendUrl}/api/v1/uploads/product-images/${imageUrl}`}
            alt={productName}
          />
          <p className="item-name">{productName}</p>
        </Link>
        <div className="product-bottom">
          <div>
            <p>${price.toFixed(2)}</p>
          </div>
          <div className="product-rating">
            <i className="fa-solid fa-star"></i>
            <p>{rating.toFixed(1)}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
