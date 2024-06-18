import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Onboarding from "./Pages/Onboarding/Onboarding";
import Cart from "./Pages/Cart/Cart";
import Orders from "./Pages/Orders/Orders";
import Favourites from "./Pages/Favourites/Favourites";
import Verify from "./Pages/Verify/Verify";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import SearchPage from "./Pages/SearchPage/SearchPage";
import { useContext, useState } from "react";
import { RefreshContext, TokenContext, UserContext } from "./Context/Contexts";

const AppRoutes = () => {
  const { refreshToken, setRefreshToken } = useContext(RefreshContext);
  const { user, setUser } = useContext(UserContext);
  const { token, setToken } = useContext(TokenContext);


  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search/:search" element={<SearchPage />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/verify" element={<Verify />} />
        </>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
