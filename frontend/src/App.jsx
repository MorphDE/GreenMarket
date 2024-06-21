import { useState } from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import {
  LoadingContext,
  ProductContext,
  RefreshContext,
  UserContext,
  TokenContext,
  CartContext,
  FilterContext,
  FavouritesContext,
  ToggleFavouritesContext,
} from "./Context/Contexts";
import Loadingscreen from "./Components/Loadingscreen/Loadingscreen";
import "@fontsource/poppins";
import { AuthProvider } from "./Context/AuthProvider";
import SilentRefresh from "./Components/SilentRefresh";
import Favorite from "../../backend/src/models/Favourite";

function App() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [products, setProducts] = useState();
  const [cart, setCart] = useState();
  const [filters, setFilters] = useState();
  const [favourites, setFavourites] = useState();
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <AuthProvider>
        <ToggleFavouritesContext.Provider value={{ toggle, setToggle }}>
          <FavouritesContext.Provider value={{ favourites, setFavourites }}>
            <CartContext.Provider value={{ cart, setCart }}>
              <FilterContext.Provider value={{ filters, setFilters }}>
                <ProductContext.Provider value={{ products, setProducts }}>
                  {/* <UserContext.Provider value={{ user, setUser }}> */}
                  {/* <TokenContext.Provider value={{ token, setToken }}> */}
                  {/* <RefreshContext.Provider
                    value={{ refreshToken, setRefreshToken }}
                  > */}
                  <LoadingContext.Provider value={{ loading, setLoading }}>
                    {loading ? <AppRoutes /> : <Loadingscreen />}
                  </LoadingContext.Provider>
                  {/* </RefreshContext.Provider> */}
                  {/* </TokenContext.Provider> */}
                  {/* </UserContext.Provider> */}
                </ProductContext.Provider>
              </FilterContext.Provider>
            </CartContext.Provider>
          </FavouritesContext.Provider>
        </ToggleFavouritesContext.Provider>
      </AuthProvider>
    </>
  );
}

export default App;
