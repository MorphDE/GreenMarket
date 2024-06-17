import "./ProductDetails.css";
import GoBack from './../../Components/GoBack/GoBack';

const ProductDetails = () => {
    return (
        <section className="productdetails-container">
            <GoBack title={"Back"}/>
            <div>
                <img src="./bread.jpg" alt="Product Image" />
            </div>
        </section>
    );
}
 
export default ProductDetails;