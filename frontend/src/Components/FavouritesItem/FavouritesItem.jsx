import { useAuth } from "../../Context/AuthProvider";

import { backendUrl } from "../../api/api";
import "./FavouritesItem.css";
import { useState } from "react";

const FavouritesItem = ({ imageUrl, productName, unit, rating, price }) => {
  const fullImageUrl = `${backendUrl}/api/v1/uploads/product-images/${imageUrl}`;

  const [favourites, setFavourites] = useState([]);
  const { token } = useAuth();

  return (
    <section className="single-item">
      <i className="fa-solid fa-heart"></i>
      {/* <div> <input type="checkbox" name="check" id="checkbox" /> </div> */}
      <div className="item-img">
        <img src={fullImageUrl} alt={productName} />
      </div>
      <div className="item-content">
        <h1>{productName}</h1>
        <div className="product-rating">
          <i className="fa-solid fa-star"></i>
          <p className="item-rate">{rating}</p>
        </div>
        <div className="item-bottom">
          <p>{price}€ </p>
        </div>
      </div>
      <i className="fa-solid fa-trash-can"></i>
    </section>
  );
};

export default FavouritesItem;
