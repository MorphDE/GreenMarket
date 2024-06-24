import "./Favourites.css";
import GoBack from "./../../Components/GoBack/GoBack";
import { backendUrl } from "../../api/api";
import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthProvider";
import FavouritesItem from "../../Components/FavouritesItem/FavouritesItem";
import { FavouriteContext } from "../../Context/Contexts";
import { useContext } from "react";
import Footer from "../../Components/Footer/Footer";

const Favourites = () => {
  const [backendFavourites, setBackendFavourites] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { token } = useAuth();

  const { favourites, setFavourites } = useContext(FavouriteContext);

  useEffect(() => {
    console.log("fetch Favourites launched");
    async function fetchFavourites() {
      //! der user wird aus dem userToken ausgelesen
      const res = await fetch(`${backendUrl}/api/v1/favorites/userFavorite`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        method: "GET",
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      if (!data) return setErrorMessage(data.message || "Failed to verify fetch Favourites");
      setBackendFavourites(data);
      setFavourites(data.map((item) => item._id));
      // console.log(cart);

      console.log(errorMessage);
      console.log("Favourites fetch successful");
    }
    fetchFavourites();
  }, []);

  console.log(backendFavourites);
  console.log(token);
  return (
    <section className="favourites-container">
      <div className="favourites-head">
        <GoBack title={"Favourites"} />
        <i className="fa-solid fa-trash-can"></i>
      </div>
      <div className="favourite-items">
        {backendFavourites.length > 0 ? (
          backendFavourites?.map((item, index) => (
            <FavouritesItem key={index} imageUrl={item?.image} productName={item?.name} unit={item?.unit} rating={item?.rating} price={item?.price} />
          ))
        ) : (
          <p> You haven't added anything to your favourites yet. </p>
        )}
      </div>
      <button className="btn-green-two">Add To Cart</button>
      <Footer />
    </section>
  );
};

export default Favourites;
