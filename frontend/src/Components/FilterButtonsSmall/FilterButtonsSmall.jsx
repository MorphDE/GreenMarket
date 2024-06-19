import { useContext, useEffect, useState } from "react";
import "./FilterButtonsSmall.css";
import { backendUrl } from "../../api/api";
import { FilterContext } from "../../Context/Contexts";

const FilterButtonsSmall = () => {

    const [categories, setCategories] = useState();
    const { filters, setFilters } = useContext(FilterContext);

    useEffect(() => {
        fetch(`${backendUrl}/api/v1/categories/`)
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    const updateCategory = (value) => {
        let newFilters = filters;
        newFilters.categoryName = value;
        setFilters(newFilters);
    }

    return (
        <section className="filterbuttons-small">
            {categories?.map((category, key) => (
                <div key={key}>
                    <p onClick={() => updateCategory(category.name)}>{category.name}</p>
                </div> 
            ))}
            
        </section>
    );
}
 
export default FilterButtonsSmall;