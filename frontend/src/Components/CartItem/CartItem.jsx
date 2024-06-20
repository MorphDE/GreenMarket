import { useState } from "react";
import { backendUrl } from "../../api/api";
import "./CartItem.css";

const CartItem = ({ imageUrl, productName, unit, rating, price, amount }) => {
  const fullImageUrl = `${backendUrl}/api/v1/uploads/product-images/${imageUrl}`;

  return (
    <section className="single-item">
      <i className="fa-solid fa-heart"></i>

      <div>
        <input type="checkbox" name="check" id="checkbox" />
      </div>
      <div className="item-img">
        <img src={fullImageUrl} alt={productName} />
      </div>
      <div className="item-content">
        <h1>{productName}</h1>
        <div className="product-rating">
          <p className="item-weight">{unit}</p>
          <i className="fa-solid fa-star"></i>
          <p className="item-rate">{rating}</p>
        </div>
        <div className="item-bottom">
          <p>{price}€ </p>
          <div className="plus-minus">
            <i className="fa-solid fa-square-minus"></i>
            <p className="item-amount">{amount}</p>
            <i className="fa-solid fa-square-plus"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
