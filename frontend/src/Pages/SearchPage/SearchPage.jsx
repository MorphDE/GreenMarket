import ProductCard from './../../Components/ProductCard/ProductCard';
import Footer from './../../Components/Footer/Footer';
import { useState, useEffect, useContext } from "react";
import Filters from './../../Components/Filters/Filters';
import { useParams } from 'react-router-dom';
import { backendUrl } from "../../api/api";
import { FilterContext } from "../../Context/Contexts";
import Searchbar from './../../Components/Searchbar/Searchbar';
import FilterButtonsSmall from './../../Components/FilterButtonsSmall/FilterButtonsSmall';
import "./SearchPage.css";

const SearchPage = () => {
    const { search } = useParams();
    const [isFilterPageOpen, setIsFilterPageOpen] = useState(false);
    const [products, setProducts] = useState([]);

    const { filters, setFilters } = useContext(FilterContext);

    const openFilterPage = () => {
      setIsFilterPageOpen(true);
  };
  
  const closeFilterPage = () => {
      setIsFilterPageOpen(false);
  };

     useEffect(() => {
        if(search && search.length > 0) {
            setFilters({})
            fetch(`${backendUrl}/api/v1/products/getProductsByName/${search}`)
             .then(response => response.json())
             .then(data => setProducts(data))
             .catch(error => console.error('Error fetching products:', error));
        }
     }, [search]);

    useEffect(() => {
        if(!search || search.length <= 0) {
           fetch(`${backendUrl}/api/v1/products/getFilteredAndSortedProducts?${buildQuery()}`)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error)); 
        }
    }, [filters])

    const buildQuery = () => {
        const params = new URLSearchParams();

        if(filters) {
            if (filters.maxPrice & filters.maxPrice > 0) params.append('maxPrice', filters.maxPrice);
            if (filters.categoryName) params.append('categoryName', filters.categoryName);
            if (filters.sortBy) params.append('sortBy', filters.sortBy); 
        }
        return params.toString();
    };

    return (
        <section className="search-page">
            <div className="search-top">
                <Searchbar onFilterButtonClick={openFilterPage} />
                <FilterButtonsSmall filters={filters} setFilters={setFilters}/>
            </div>
            <div className="thumbnail">
                <img src="./bread.jpg" alt="Thumbnail" />
            </div>
            <div className="search-products">
                {products.map((product, key) => (
                    <ProductCard
                        key={key}
                        id={product._id}
                        imageUrl={product.image}
                        productName={product.name}
                        price={product.price}
                        rating={product.rating}
                    />
                ))}
            </div>
            {isFilterPageOpen && <Filters onClose={closeFilterPage} />}
            <Footer />
        </section>
    );
  }
export default SearchPage;
