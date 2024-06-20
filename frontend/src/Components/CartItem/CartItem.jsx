
import { useState } from "react";

import { CartContext, RefreshContext, TokenContext } from "../../Context/Contexts";

import { backendUrl } from "../../api/api";
import "./CartItem.css";
import { useContext, useEffect, useState } from "react";

const CartItem = ({ imageUrl, productName, unit, rating, price, amount, productId, fetchCart }) => {
  const fullImageUrl = `${backendUrl}/api/v1/uploads/product-images/${imageUrl}`;

  const { token, setToken } = useContext(TokenContext);
  const { refresh, setRefresh } = useContext(RefreshContext);
  const { cart, setCart } = useContext(CartContext);

  const [errorMessage, setErrorMessage] = useState("");
  const [amountProduct, setAmountProduct] = useState(amount);
  // ! state duplication mit cart context und amountProduct

  const addQuantity = () => {
    const newQuantity = amountProduct + 1;
    setAmountProduct(newQuantity);
  };

  const decreaseQuantity = () => {
    if (amountProduct <= 1) {
      console.log(`Error. current quantity: ${amountProduct}. Can't decrease from 1, otherwise quantity will reach 0`);
    } else {
      const newQuantity = amountProduct - 1;
      setAmountProduct(newQuantity);
    }
  };

  useEffect(() => {
    async function updateQuantity() {
      const res = await fetch(`${backendUrl}/api/v1/cart/updateQuantity/${productId}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        method: "PATCH",
        body: JSON.stringify({ quantity: amountProduct }),
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      if (!data.result) return console.log("error   " + data.message);
      /* //kaputt
      console.log("new Quantity: " + data.result);
      setCart(data.result);
      console.log(cart);

      console.log(errorMessage);
      console.log("updating quantity successful");
      */
      // ! hier ist die weitergereichte funktion aus Cart.jsx
      fetchCart();
    }
    updateQuantity();
  }, [token, refresh, amountProduct]);

  console.log("userId:  " + cart?.userId);
  console.log("productId:  " + cart?.items?.productID);

  async function removeItemFromCart() {
    const res = await fetch(`${backendUrl}/api/v1/cart/removeItem`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: cart?.userId,
        productId: cart?.items?.productId,
      }),
      method: "POST",
      credentials: "include",
    });

    const data = await res.json();
    if (!data.result) return console.log("error   " + data.message);
    setCart(data.result);
  }

  useEffect(() => {
    removeItemFromCart();
  }, []);

  return (
    <section className="single-item">
      <i className="fa-solid fa-heart"></i>
      {/* <div> <input type="checkbox" name="check" id="checkbox" /> </div> */}
      <div className="item-img">
        <img src={fullImageUrl} alt={productName} />
      </div>
      <div className="item-content">
        <h1>{productName}</h1>
        <div className="product-rating">
          <i className="fa-solid fa-star"></i>
          <p className="item-rate">{rating}</p>
        </div>
        <div className="item-bottom">
          <p>{price}€ </p>
          <div className="plus-minus">
            <i className="fa-solid fa-square-minus" onClick={decreaseQuantity}></i>
            <p className="item-amount">
              {amountProduct}
              {unit}
            </p>
            {/* //! optimistic update:  muss nicht unbedingt übereinstimen mit Backend */}
            <i className="fa-solid fa-square-plus" onClick={addQuantity}></i>
          </div>
        </div>
      </div>
      <i className="fa-solid fa-trash-can" onClick={removeItemFromCart}></i>
    </section>
  );
};

export default CartItem;
