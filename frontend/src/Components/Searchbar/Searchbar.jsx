import "./Searchbar.css";

const Searchbar = ({ onFilterButtonClick }) => {
    return (
        <section className="searchbar-container">
            <div className="filter-button" onClick={onFilterButtonClick}>
                <img src="./Document.png" alt="Filter Icon" />
            </div>
            <div className="searchbar">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="search" name="searchbar" id="search" />
            </div>
        </section>
    );
};

export default Searchbar;
