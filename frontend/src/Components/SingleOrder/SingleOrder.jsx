import "./SingleOrder.css";

const SingleOrder = () => {
    return (
        <section className="singleorder-container">
            <div className="singleorder-card">
                <div className="singleorder-left">
                    <h1>GM123456</h1>
                    <p>100€</p>
                </div>
                <div className="singleorder-right">
                    <div className="singleorder-right-top">
                        <p className="singleorder-status">Pending</p>
                        <p className="singleorder-pay">Paid</p>
                    </div>
                    <p className="order-date">25 May, 11:00 AM</p>
                </div>
            </div>
        </section>
    );
}
 
export default SingleOrder;