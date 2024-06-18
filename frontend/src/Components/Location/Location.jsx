import { UserContext } from "../../Context/Contexts";
import "./Location.css";
import React, { useContext } from "react";

const Location = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <section className="location-container">
      <div>
        <i className="fa-solid fa-location-dot"></i>
      </div>
      <div>
        <p>{user ? user?.address?.city : ""}</p>
      </div>
    </section>
  );
};

export default Location;
