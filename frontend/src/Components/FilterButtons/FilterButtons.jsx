import "./FilterButtons.css";

const FilterButtons = () => {
    return (
        <section className="filterbuttons-container">
            <div className="single-filterbutton">
                <img src="./vegetables.jpeg" alt="Vegetables Image" />
                <p>Veggies</p>
            </div>
            <div className="single-filterbutton">
                <img src="./fruits.jpg" alt="Fruits Image" />
                <p>Fruits</p>
            </div>
            <div className="single-filterbutton">
                <img src="./meat.jpeg" alt="Meat Image" />
                <p>Meat</p>
            </div>
            <div className="single-filterbutton">
                <img src="./drinks.jpg" alt="Drinks Image" />
                <p>Drinks</p>
            </div>
            <div className="single-filterbutton">
                <img src="./bread.jpg" alt="Bread Image" />
                <p>Bread</p>
            </div>
        </section>
    );
}
 
export default FilterButtons;