import "./Footer.css";
import { Link, NavLink } from 'react-router-dom';
import FooterImage from "../../../public/cart.png"

const Footer = () => {
    return (
        <section className="footer-container">
            <Link to={"/"}>
                <div className="single-content">
                    <i className="fa-solid fa-house"></i>
                    <p>Home</p>
                </div>
            </Link>
            <Link to={"/orders"}>
                <div className="single-content single-content-left">
                    <i className="fa-solid fa-paste"></i>
                    <p>Orders</p>
                </div>
            </Link>
            <Link to={"/cart"} className="cartlink">
                <div className="footer-circle">
                    <img src={FooterImage} alt="Cart Image" />
                </div>
            </Link>
            <Link to={"/favourites"}>
                <div className="single-content single-content-right">
                    <i className="fa-solid fa-heart"></i>
                    <p>Wishlist</p>
                </div>
            </Link>
            <Link to={"/profile"}>
                <div className="single-content">
                    <i className="fa-solid fa-user"></i>
                    <p>Profile</p>
                </div>
            </Link>
        </section>
    );
}
 
export default Footer;