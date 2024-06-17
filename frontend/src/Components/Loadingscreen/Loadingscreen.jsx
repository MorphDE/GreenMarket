import { LoadingContext } from "../../Context/LoadingContext";
import "./Loadingscreen.css";
import { useContext, useEffect } from "react";
import LoadingImage from "../../../public/grocery.png"

const Loadingscreen = () => {
  const { setLoading } = useContext(LoadingContext);

    useEffect(() => {
      setTimeout(() => {
        setLoading(true);
      }, 3000);
    }, []);
  
    return (
      <section className="loading-bg">
        <img src={LoadingImage} alt="Loadingscreen Image" />
        <h1 className="loading-title">GreenMarket</h1>
        <p className="loading-slogan">EASY VEGGIE SHOPPING</p>
        <div className="loading-container">
            <div className="loader"></div>
        </div>
      </section>
    );
  };
 
export default Loadingscreen;