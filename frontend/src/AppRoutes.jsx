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
import { ProductContext, RefreshContext, TokenContext, UserContext } from "./Context/Contexts";
import AuthRequired from "./Components/AuthRequired";
import SilentRefresh from "./Components/SilentRefresh";

const AppRoutes = () => {
  const { products, setProducts } = useContext(ProductContext);

  return (
    <BrowserRouter>
      <SilentRefresh>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={
              <AuthRequired>
                <Profile />
              </AuthRequired>
            }
          />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route
            path="/cart"
            element={
              <AuthRequired>
                <Cart />
              </AuthRequired>
            }
          />
          <Route path="/search/:search" element={<SearchPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/orders" element={<Orders />} />

          <Route
            path="/favourites"
            element={
              <AuthRequired setUser={setUser} token={token} setToken={setToken}>
                <Favourites />{" "}
              </AuthRequired>
            }
          />

          <Route path="/verify" element={<Verify />} />
        </Routes>{" "}
      </SilentRefresh>
    </BrowserRouter>
  );
};

export default AppRoutes;
