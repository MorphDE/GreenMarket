import "./Favourites.css";
import CartItem from './../../Components/CartItem/CartItem';
import GoBack from './../../Components/GoBack/GoBack';

const Favourites = () => {
    return (
        <section className="favourites-container">
            <div className="favourites-head">
                <GoBack title={"Favourites"}/>
               <i className="fa-solid fa-trash-can"></i> 
            </div>
            <div className="favourite-items">
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
            <button className="btn-green-two">Add To Cart</button>
        </section>
    );
}
 
export default Favourites;