import "./GoBack.css";
import { Link } from "react-router-dom";

const GoBack = ({ title, onClick }) => {
    return (
        <section className="go-back" onClick={onClick}>
            <Link to={"/"}><img src="./Back.png" alt="Back Arrow Image" /></Link>
            {title && <span className="go-back-title">{title}</span>}
        </section>
    );
}
 
export default GoBack;