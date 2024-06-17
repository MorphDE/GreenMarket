import "./SingleOffer.css";

const SingleOffer = () => {
    return (
        <section className="singleoffer-container">
            <div className="scroll-content">
                    <div className="image-container">
                        <img src="offer1.jpg" alt="Offer Image"/>
                        <p className="overlay">Get 20% Off</p>
                    </div>
                    <div className="image-container">
                        <img src="offer2.jpg" alt="Offer Image"/>
                        <p className="overlay">50% Discount</p>
                    </div>
                    <div className="image-container">
                        <img src="offer3.jpg" alt="Offer Image"/>
                        <p className="overlay">Weekly Offer</p>
                    </div>
                </div>
        </section>
    );
}
 
export default SingleOffer;