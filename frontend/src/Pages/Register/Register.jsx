import { Link } from "react-router-dom";
import GoBack from "../../Components/GoBack/GoBack";
import "./Register.css";

const Register = () => {
    return (
        <section className="register-container">
            <GoBack/>
            <div className="register-top">
                <h1>Create New Account</h1>
                <p>Enter your details to create an account</p>
            </div>
            <div className="register-inputs">
                <form>
                    <input type="email" placeholder="E-Mail"/>
                    <input type="password" placeholder="Password"/>
                    <input type="text" placeholder="Firstname"/>
                    <input type="text" placeholder="Lastname"/>
                    <input type="text" placeholder="Street"/>
                    <input type="text" placeholder="City"/>
                </form>
            </div>
            <div className="register-button">
                <button className="btn-green">Sign Up</button>
            </div>
            <div className="register-bottom">
                <Link to={"/login"}><p className="bottom-text">Already have an Account</p></Link>
            </div>
        </section>
    );
}
 
export default Register;