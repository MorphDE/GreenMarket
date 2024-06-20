import "./Favourites.css";
import CartItem from "./../../Components/CartItem/CartItem";
import GoBack from "./../../Components/GoBack/GoBack";
import { backendUrl } from "../../api/api";
import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../../Context/Contexts";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { token, setToken } = useContext(TokenContext);

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
      if (!data)
        return setErrorMessage(
          data.message || "Failed to verify fetch Favourites"
        );
      setFavourites(data);
      // console.log(cart);

      console.log(errorMessage);
      console.log("Favourites fetch successful");
    }
    fetchFavourites();
  }, []);

  // useEffect(() => {
  //   fetch(`${backendUrl}/api/v1/favorites/userFavorite`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setFavourites(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  console.log(favourites);
  console.log(token);
  return (
    <section className="favourites-container">
      <div className="favourites-head">
        <GoBack title={"Favourites"} />
        <i className="fa-solid fa-trash-can"></i>
      </div>
      <div className="favourite-items">
        {favourites.map((item, index) => (
          <CartItem
            key={index}
            imageUrl={item?.image}
            productName={item?.name}
            unit={item?.unit}
            rating={item?.rating}
            price={item?.price}
          />
        ))}
      </div>
      <button className="btn-green-two">Add To Cart</button>
    </section>
  );
};

export default Favourites;
