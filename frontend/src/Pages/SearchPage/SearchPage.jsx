import FilterButtonsSmall from "../../Components/FilterButtonsSmall/FilterButtonsSmall";
import Searchbar from "../../Components/Searchbar/Searchbar";
import "./SearchPage.css";
import ProductCard from './../../Components/ProductCard/ProductCard';
import Footer from './../../Components/Footer/Footer';
import { useState } from "react";
import Filters from "../../Components/Filters/Filter";

const SearchPage = () => {

    const [isFilterPageOpen, setIsFilterPageOpen] = useState(false);

    const openFilterPage = () => {
        setIsFilterPageOpen(true);
    };

    const closeFilterPage = () => {
        setIsFilterPageOpen(false);
    };

    return (
        <section className="search-page">
            <div className="search-top">
                <Searchbar onFilterButtonClick={openFilterPage}/>
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
            {isFilterPageOpen && <Filters onClose={closeFilterPage} />}
            <Footer/>
        </section>
    );
}
 
export default SearchPage;