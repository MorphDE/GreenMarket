import "./Orders.css";
import SingleOrder from './../../Components/SingleOrder/SingleOrder';
import GoBack from "../../Components/GoBack/GoBack";

const Orders = () => {
    return (
        <section className="orders-container">
            <GoBack title={"Order History"}/>
            <div className="order-filter">
                <p>All</p>
            </div>
            <div className="single-orders">
                <SingleOrder/>
                <SingleOrder/>
            </div>
        </section>
    );
}
 
export default Orders;