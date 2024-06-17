import FilterButtonsSmall from "../../Components/FilterButtonsSmall/FilterButtonsSmall";
import Searchbar from "../../Components/Searchbar/Searchbar";
import "./SearchPage.css";
import ProductCard from './../../Components/ProductCard/ProductCard';
import Footer from './../../Components/Footer/Footer';

const SearchPage = () => {
    return (
        <section className="search-page">
            <div className="search-top">
                <Searchbar/>
                <FilterButtonsSmall/>
            </div>
            <div className="thumbnail">
                <img src="./bread.jpg" alt="Thumbnail" />
            </div>
            <div className="search-products">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
            <Footer/>
        </section>
    );
}
 
export default SearchPage;