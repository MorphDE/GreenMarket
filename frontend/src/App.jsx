import { useState } from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import { LoadingContext, RefreshContext, UserContext } from "./Context/Contexts";
import Loadingscreen from "./Components/Loadingscreen/Loadingscreen";
import "@fontsource/poppins";
import { TokenContext } from "./Context/Contexts";

function App() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("user1");
  const [token, setToken] = useState("sdasdadwwadsasdds");
  const [refreshToken, setRefreshToken] = useState("jkgkzughzkukkzgt");

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <TokenContext.Provider value={{ token, setToken }}>
          <RefreshContext.Provider value={{ refreshToken, setRefreshToken }}>
            <LoadingContext.Provider value={{ loading, setLoading }}>{loading ? <AppRoutes /> : <Loadingscreen />}</LoadingContext.Provider>
          </RefreshContext.Provider>
        </TokenContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
