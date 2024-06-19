import { useEffect, useState } from "react";
import "./FilterButtons.css";
import { backendUrl } from "../../api/api";

const FilterButtons = () => {
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
  return (
    <article className="filterbuttons-container">
      {categories?.map((item, index) => (
        <div key={index} className="single-filterbutton">
          <img src={item.icon} alt="" />
          <p>{item.name}</p>
        </div>
      ))}
    </article>
  );
};

export default FilterButtons;
