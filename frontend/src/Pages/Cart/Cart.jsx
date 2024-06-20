import "./Cart.css";
import GoBack from "./../../Components/GoBack/GoBack";
import CartItem from "../../Components/CartItem/CartItem";
import { CartContext, RefreshContext, TokenContext } from "../../Context/Contexts";
import { useContext, useEffect, useState } from "react";
import { backendUrl } from "../../api/api";

const Cart = () => {
  const { token, setToken } = useContext(TokenContext);
  const { refresh, setRefresh } = useContext(RefreshContext);
  const { cart, setCart } = useContext(CartContext);

  const [errorMessage, setErrorMessage] = useState("");

  const calculateTotalPrice = (allProducts) => {
    let totalPrice = 0;

    allProducts?.forEach((item) => {
      const result = item?.productId.price * item?.quantity;
      totalPrice += result;
    });

    return totalPrice;
  };

  async function fetchCart() {
    const res = await fetch(`${backendUrl}/api/v1/cart/getCart`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    if (!data.cart) return setErrorMessage(data.message || "Failed to verify fetch Cart");
    setCart(data.cart);

    console.log(errorMessage);
  }

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <section className="cart-container">
      <div className="cart-head">
        <GoBack title={"Cart"} />
      </div>
      <div className="cart-items">
        {cart ? (
          cart?.items?.map((item, index) => (
            <CartItem
              key={index}
              imageUrl={item?.productId.image}
              productName={item?.productId.name}
              unit={item?.productId.unit}
              rating={item?.productId.rating}
              price={item?.productId.price}
              amount={item?.quantity}
              productId={item?.productId._id}
              fetchCart={fetchCart}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <button className="btn-green-two">Check Out - Total: {calculateTotalPrice(cart?.items)}€</button>
    </section>
  );
};

export default Cart;
