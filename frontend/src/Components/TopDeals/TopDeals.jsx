import ProductCard from "../ProductCard/ProductCard";
import "./TopDeals.css";

const TopDeals = () => {
    return (
        <section className="topdeals-container">
        <h1>Today's Deals</h1>
        <div className="product-cards">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>

        </div>
        </section>
    );
}
 
export default TopDeals;