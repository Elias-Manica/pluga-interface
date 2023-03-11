import { useState } from "react";
import { GlobalStyle } from "../assets/css/GlobalStyle";
import FirstContext from "../contexts/firstWatch";
import HomeScreen from "./HomeScreen/HomeScreen";

function App() {
  const [firstTool, setFirstTool] = useState({});

  return (
    <>
      <FirstContext.Provider value={{ firstTool, setFirstTool }}>
        <GlobalStyle />
        <HomeScreen />
      </FirstContext.Provider>
    </>
  );
}

export default App;
