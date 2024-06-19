import { useEffect, useState } from "react";
import "./ProductCard.css";
import { backendUrl } from "../../api/api";
import { Link } from "react-router-dom";

const ProductCard = ({ imageUrl, productName, price, rating, id }) => {
  return (
    <section className="productcard-container">
      <Link to={`/product/${id}`}>
        <div className="product-card">
          <i className="fa-solid fa-heart"></i>
          <img
            src={`${backendUrl}/api/v1/uploads/product-images/${imageUrl}`}
            alt={productName}
          />
          <p className="item-name">{productName}</p>
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
      </Link>
    </section>
  );
};

export default ProductCard;
