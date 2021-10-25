import React from "react";
import GlobalProvider from "./src/context/provider";
import AppNavContainer from "./src/navigations";

const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer></AppNavContainer>
    </GlobalProvider>
  );
};

export default App;
