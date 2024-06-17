import "./Cart.css";
import GoBack from './../../Components/GoBack/GoBack';
import CartItem from "../../Components/CartItem/CartItem";

const Cart = () => {
    return (
        <section className="cart-container">
            <div className="cart-head">
                <GoBack title={"Cart"}/>
               <i className="fa-solid fa-trash-can"></i> 
            </div>
            <div className="cart-items">
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
            <button className="btn-green-two">Check Out - Total 500€</button>
        </section>
    );
}
 
export default Cart;