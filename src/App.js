import { useState } from "react";
import Home from "./Screens/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { createContext } from "react";

export const PokemonContext = createContext(null);

function App() {
  let [offset, setOffset] = useState(0);
  
  return (
    <div className="App">
      <PokemonContext.Provider
        value={{
          offset,
          setOffset,
        }}
      >
        <Home />
        
      </PokemonContext.Provider>
    </div>
  );
}

export default App;
