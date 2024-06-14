import "./GoBack.css";
import { Link } from "react-router-dom";

const GoBack = () => {
    return (
        <section className="go-back">
            <Link to={"/"}><img src="./Back.png" alt="Back Arrow Image" /></Link>
        </section>
    );
}
 
export default GoBack;