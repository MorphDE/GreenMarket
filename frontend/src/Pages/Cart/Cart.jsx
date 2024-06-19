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

  const fetchCart = async () => {
    console.log("fetch Cart launched");

    const res = await fetch(`${backendUrl}/api/v1/cart/getCart`, {
      headers: { "Content-Type": "application/json", authorization: `Bearer ${token}` },
      method: "GET",
        body: JSON.stringify({
            
        }),
      credentials: "include",
    });

    const data = await res.json();
    console.log(data);
    if (!data.result) return setErrorMessage(data.message || "Failed to verify fetch Cart");

    console.log(errorMessage);
    console.log("Cart fetch successful");
    console.log(data.result);
  };

  fetchCart();

  /*
  useEffect(() => {
    async function fetchCart() {
      try {
        console.log(user);
        console.log(token);
        const res = await fetch(`${backendUrl}/api/v1/cart/getCart`, {
          headers: { authorization: `Bearer ${token}` },
          method: "GET",
        });

        const data = await res.json();

        if (!data) {
          setErrorMessage(data.message || "Could not load cart");
          return;
        }

        setCart(data.result);
        setErrorMessage("");
      } catch (error) {
        setErrorMessage("An error occurred while fetching cart.");
      }
    }
    fetchCart();
  }, [token, refresh]);
*/
  return (
    <section className="cart-container">
      <div className="cart-head">
        <GoBack title={"Cart"} />
        <i className="fa-solid fa-trash-can"></i>
      </div>
      <div className="cart-items">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <button className="btn-green-two">Check Out - Total 500€</button>
    </section>
  );
};

export default Cart;
