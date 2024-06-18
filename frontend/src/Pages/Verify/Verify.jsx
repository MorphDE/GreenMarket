import { useContext, useState } from "react";
import "./Verify.css";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../../api/api";
import { TokenContext, UserContext } from "../../Context/Contexts";

const Verify = () => {
  const [sixDigitCode, setSixDigitCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");

  const { user, setUser } = useContext(UserContext);
  const { token, setToken } = useContext(TokenContext);
  const navigate = useNavigate();

  const verifyEmail = async (e) => {
    setUser(email);

    const res = await fetch(`${backendUrl}/api/v1/users/verifyEmail`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ email, sixDigitCode }),
    });
    console.log(email);

    /* mit bearer token?
const res = await fetch(`${backendUrl}/api/v1/users/verifyEmail`, {
      headers: { "Content-Type": "application/json", authorization: `Bearer ${token}` },
      method: "POST",
      body: JSON.stringify({ sixDigitCode }),
    });
    */

    const data = await res.json();

    if (!data.result) return setErrorMessage(data.message || "Failed to verify email");

    setErrorMessage("");
    console.log(data);

    //navigate("/");
  };

  return (
    <section className="verify-container">
      <div className="verify-background">
        <div className="verify-top">
          <img src="./success.png" alt="Success Image" />
          <h1>Welcome to GreenMarket</h1>
          <p>You have successfully registered and created a new account. Please verify your account with the 6-digit code we emailed you.</p>
        </div>
        <div className="verify-input">
          <form className="verify-form">
            <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Six digit code" value={sixDigitCode} onChange={(e) => setSixDigitCode(e.target.value)} />
          </form>
        </div>
        <div className="verify-button">
          <button className="btn-green" onClick={verifyEmail}>
            Verify Account
          </button>
        </div>
      </div>
    </section>
  );
};

export default Verify;
