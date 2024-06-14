import "./Verify.css";

const Verify = () => {
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
                        <input type="number" placeholder="Verify Code"/>
                    </form>
                </div>
                <div className="verify-button">
                    <button className="btn-green">Verify Account</button>
                </div>
            </div>
        </section>
    );
}
 
export default Verify;