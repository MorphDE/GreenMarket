import { useState } from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import {
  LoadingContext,
  ProductContext,
  FavouriteContext,
  CartContext,
  FilterContext,
} from "./Context/Contexts";
import Loadingscreen from "./Components/Loadingscreen/Loadingscreen";
import "@fontsource/poppins";
import { AuthProvider } from "./Context/AuthProvider";

function App() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState();
  const [cart, setCart] = useState();
  const [filters, setFilters] = useState();
  const [favourites, setFavourites] = useState();

  return (
    <>
      <AuthProvider>
        <CartContext.Provider value={{ cart, setCart }}>
          <FilterContext.Provider value={{ filters, setFilters }}>
            <ProductContext.Provider value={{ products, setProducts }}>
              <FavouriteContext.Provider value={{ favourites, setFavourites }}>
                <LoadingContext.Provider value={{ loading, setLoading }}>
                  {loading ? <AppRoutes /> : <Loadingscreen />}
                </LoadingContext.Provider>
              </FavouriteContext.Provider>
            </ProductContext.Provider>
          </FilterContext.Provider>
        </CartContext.Provider>
      </AuthProvider>
    </>
  );
}

export default App;
