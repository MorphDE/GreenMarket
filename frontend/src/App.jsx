import { useState } from 'react';
import './App.css'
import AppRoutes from './AppRoutes';
import { LoadingContext } from './Context/LoadingContext';
import Loadingscreen from './Components/Loadingscreen/Loadingscreen';
import "@fontsource/poppins"; 

function App() {

  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
            {loading ? (
              <AppRoutes/>
            ) : (
              <Loadingscreen />
            )}
        </LoadingContext.Provider>
  )
}

export default App
