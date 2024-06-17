import "./Filter.css";
import GoBack from './../GoBack/GoBack';

const Filters = ({ onClose }) => {
    return (
        <section className="filterpage">
            <GoBack title="Filters" onClick={onClose} />
            <div className="filter-top">
                <div className="filter-top-text">
                    <h1>Sort By</h1>
                    <p>Clear Filters</p>
                </div>
                <div className="filter-top-buttons">
                    <button className="btn-light">Lowest</button>
                    <button className="btn-light">Highest</button>
                    <button className="btn-light">Best</button>
                    <button className="btn-light">Latest</button>
                </div>
            </div>
            <div className="filter-center">
                <h2>Price</h2>
                <input type="range" name="priceslider" id="slider" min={0} max={250}/>
            </div>
            <div className="filter-bottom">
                <div className="filter-bottom-text">
                    <h3>Category</h3>
                </div>
                <div className="filter-bottom-buttons">
                    <button className="btn-light">Fruits</button>
                    <button className="btn-light">Drinks</button>
                    <button className="btn-light">Seafood</button>
                    <button className="btn-light">Bread</button>
                    <button className="btn-light">Veggies</button>
                    <button className="btn-light">Meat</button>
                </div>
            </div>
            <div className="btn-apply">
                <button className="btn-light">Apply Filters</button>
            </div>
        </section>
    );
};

export default Filters;