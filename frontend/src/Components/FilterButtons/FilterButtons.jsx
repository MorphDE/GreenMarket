import { useEffect, useState } from "react";
import "./FilterButtons.css";
import { backendUrl } from "../../api/api";

const FilterButtons = ({ activeCategory, setActiveCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${backendUrl}/api/v1/categories/`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const selectCategory = (category) => {
    if (category === activeCategory) {
      setActiveCategory(null) 
    } else {
      setActiveCategory(category)
    }
  }

  return (
    <article className="filterbuttons-container">
      {categories?.map((item, index) => (
          <div className="single-filterbutton" key={index} onClick={() => selectCategory(item)}>
            <img src={item.icon} alt="" className={activeCategory === item ? `active-category` : ``}/>
            <p className={activeCategory === item ? `active-categoryfont` : ``}>{item.name}</p>
          </div>
      ))}
    </article>
  );
};

export default FilterButtons;
