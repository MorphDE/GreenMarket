import "./Home.css";
import Searchbar from "./../../Components/Searchbar/Searchbar";
import Location from "../../Components/Location/Location";
import Footer from "./../../Components/Footer/Footer";
import FilterButtons from "../../Components/FilterButtons/FilterButtons";
import TopDeals from "./../../Components/TopDeals/TopDeals";
import { useState } from "react";
import AllOffers from "../../Components/AllOffers/AllOffers";
import Filters from './../../Components/Filters/Filters';

const Home = () => {
  const [isFilterPageOpen, setIsFilterPageOpen] = useState(false);

  const openFilterPage = () => {
    setIsFilterPageOpen(true);
  };

  const closeFilterPage = () => {
    setIsFilterPageOpen(false);
  };

  return (
    <section className="home-container">
      <Location />
      <Searchbar onFilterButtonClick={openFilterPage} />
      <AllOffers />
      <FilterButtons />
      <TopDeals />
      <Footer />
      {isFilterPageOpen && <Filters onClose={closeFilterPage} />}
    </section>
  );
};

export default Home;
