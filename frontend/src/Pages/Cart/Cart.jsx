import "./Cart.css";
import GoBack from "./../../Components/GoBack/GoBack";
import CartItem from "../../Components/CartItem/CartItem";
import { CartContext, ProductContext, RefreshContext, TokenContext, UserContext } from "../../Context/Contexts";
import { useContext, useEffect, useState } from "react";
import { backendUrl } from "../../api/api";

const Cart = () => {
  const { user, setUser } = useContext(UserContext);
  const { token, setToken } = useContext(TokenContext);
  const { products, setProducts } = useContext(ProductContext);
  const { refresh, setRefresh } = useContext(RefreshContext);
  const { cart, setCart } = useContext(CartContext);

  const [errorMessage, setErrorMessage] = useState("");

  const calculateTotalPrice = (allProducts) => {
    let totalPrice = 0;

    allProducts.forEach((item) => {
      const result = item.productId.price * item.quantity;
      totalPrice += result;
    });

    return totalPrice;
  };

  useEffect(() => {
    console.log("fetch Cart launched");
    async function fetchCart() {
      //! der user wird aus dem userToken ausgelesen
      const res = await fetch(`${backendUrl}/api/v1/cart/getCart`, {
        headers: { "Content-Type": "application/json", authorization: `Bearer ${token}` },
        method: "GET",
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      if (!data.cart) return setErrorMessage(data.message || "Failed to verify fetch Cart");
      setCart(data.cart);
      console.log(cart);

      console.log(errorMessage);
      console.log("Cart fetch successful");
    }
    fetchCart();
  }, [token, refresh]);

  return (
    <section className="cart-container">
      <div className="cart-head">
        <GoBack title={"Cart"} />
        <i className="fa-solid fa-trash-can"></i>
      </div>
      <div className="cart-items">
        {cart ? (
          cart?.items?.map((item, index) => (
            <CartItem
              key={index}
              imageUrl={item.productId.image}
              productName={item.productId.name}
              unit={item.productId.unit}
              rating={item.productId.rating}
              price={item.productId.price}
              amount={item.quantity}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <button className="btn-green-two"> Check Out - Total: {calculateTotalPrice(cart.items)}€</button> //! TODO: calculate total price of shopping cart
    </section>
  );
};

export default Cart;
