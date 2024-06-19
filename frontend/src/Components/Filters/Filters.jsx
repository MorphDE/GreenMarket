import "./Filters.css";
import GoBack from './../GoBack/GoBack';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendUrl } from './../../api/api';

const Filters = ({ onClose }) => {
    const [filterOptions, setfilterOptions] = useState([]);
    const [selectedSort, setSelectedSort] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [priceRange, setPriceRange] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${backendUrl}/api/v1/categories/`)
          .then((res) => res.json())
          .then((data) => {
            setfilterOptions(data);
          })
          .catch((err) => {
            console.log(err);
          });
    }, []);

    const handleSortClick = (sortType) => {
        setSelectedSort(prevSort => prevSort === sortType ? '' : sortType);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(prevCategory => prevCategory === category ? '' : category);
    };

    const handleRangeChange = (e) => {
        setPriceRange(e.target.value);
    };

    const buildQuery = () => {
        const params = new URLSearchParams();

        if (priceRange) params.append('maxPrice', priceRange);
        if (selectedCategory) params.append('categoryName', selectedCategory);
        if (selectedSort) params.append('sortBy', selectedSort);

        return params.toString();
    };

    const handleApplyFilters = () => {
        const queryString = buildQuery();
        navigate(`/search?${queryString}`);
    };

    const handleClearFilters = () => {
        setSelectedSort('');
        setSelectedCategory('');
        setPriceRange(0);
    };

    return (
        <section className="filterpage">
            <GoBack title="Filters" onClick={onClose} />
            <div className="filter-top">
                <div className="filter-top-text">
                    <h1>Sort By</h1>
                    <p onClick={handleClearFilters}>Clear Filters</p>
                </div>
                <div className="filter-top-buttons">
                    {['Lowest', 'Highest', 'Best', 'Latest'].map((sortType) => (
                        <button
                            key={sortType}
                            className={`btn-light ${selectedSort === sortType ? 'selected' : ''}`}
                            onClick={() => handleSortClick(sortType)}
                        >
                            {sortType}
                        </button>
                    ))}
                </div>
            </div>
            <div className="filter-center">
                <h2>Price</h2>
                <input
                    type="range"
                    name="priceslider"
                    id="slider"
                    min={0}
                    max={250}
                    value={priceRange}
                    onChange={handleRangeChange}
                />
                <span>{priceRange}</span>
            </div>
            <div className="filter-bottom">
                <div className="filter-bottom-text">
                    <h3>Category</h3>
                </div>
                <div className="filter-bottom-buttons">
                    {filterOptions.map((item) => (
                        <button
                            className={`btn-light ${selectedCategory === item.name ? 'selected' : ''}`}
                            key={item.name}
                            onClick={() => handleCategoryClick(item.name)}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
            <div className="btn-apply">
                <button className="btn-light" onClick={handleApplyFilters}>Apply Filters</button>
            </div>
        </section>
    );
};

export default Filters;
