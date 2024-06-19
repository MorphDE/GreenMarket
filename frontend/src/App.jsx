import { useState } from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import { LoadingContext, ProductContext, RefreshContext, UserContext, TokenContext, FilterContext } from "./Context/Contexts";
import Loadingscreen from "./Components/Loadingscreen/Loadingscreen";
import "@fontsource/poppins";

function App() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [products, setProducts] = useState();
  const [filters, setFilters] = useState();

  return (
    <>
      <FilterContext.Provider value={{ filters, setFilters }}>
        <ProductContext.Provider value={{ products, setProducts }}>
          <UserContext.Provider value={{ user, setUser }}>
            <TokenContext.Provider value={{ token, setToken }}>
              <RefreshContext.Provider value={{ refreshToken, setRefreshToken }}>
                <LoadingContext.Provider value={{ loading, setLoading }}>{loading ? <AppRoutes /> : <Loadingscreen />}</LoadingContext.Provider>
              </RefreshContext.Provider>
            </TokenContext.Provider>
          </UserContext.Provider>
        </ProductContext.Provider>
      </FilterContext.Provider>
    </>
  );
}

export default App;
