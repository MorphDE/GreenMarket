import { useAuth } from "../../Context/AuthProvider";
import { backendUrl } from "../../api/api";
import "./FavouritesItem.css";

const FavouritesItem = ({ id, imageUrl, productName, unit, rating, price, handleDelete }) => {
  const fullImageUrl = `${backendUrl}/api/v1/uploads/product-images/${imageUrl}`;
  const { token } = useAuth();

  return (
    <section className="single-item">
      <i className="fa-solid fa-trash-can" onClick={() => handleDelete(id)}></i>
      <div className="item-img">
        <img src={fullImageUrl} alt={productName} />
      </div>
      <div className="item-content">
        <h1>{productName}</h1>
        <div className="product-rating">
          <i className="fa-solid fa-star"></i>
          <p className="item-rate">{rating}</p>
        </div>
          <p>Price: {price}€ </p>
      </div>
    </section>
  );
};

export default FavouritesItem;
