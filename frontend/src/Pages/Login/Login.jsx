import "./Login.css";
import GoBack from './../../Components/GoBack/GoBack';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section className="login-container">
            <GoBack/>
            <div className="login-top">
                <img src="./grocery2.png" alt="Grocery Image" />
                <h1><span style={{fontWeight:900}}>GreenM</span><span style={{fontWeight:300}}>arket</span></h1>
            </div>
            <div className="login-inputs">
                <form>
                    <input type="email" name="email" id="mail" placeholder="E-Mail"/>
                    <input type="password" name="password" id="pw" placeholder="Password"/>
                </form>
            </div>
            <div className="login-button">
                <button className="btn-green">Sign In</button>
            </div>
            <div className="login-bottom">
                <Link to={"/register"}><p className="bottom-text">Don't have an Account</p></Link>
            </div>
        </section>
    );
}
 
export default Login;