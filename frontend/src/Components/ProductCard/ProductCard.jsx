import { useEffect, useState } from "react";
import "./ProductCard.css";
import { backendUrl } from "../../api/api";

const ProductCard = ({imageUrl, productName, price, rating}) => {
  return (
    <section className="productcard-container">
      <div className="product-card">
        <i className="fa-solid fa-heart"></i>
        <img src={imageUrl} alt={productName} />
        <p className="item-name">{productName}</p>
        <div className="product-bottom">
          <div>
            <p>{price}€</p>
          </div>
          <div className="product-rating">
            <i className="fa-solid fa-star"></i>
            <p>{rating}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
