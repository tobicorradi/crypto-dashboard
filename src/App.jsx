import React from "react";
import Header from "./components/Header";
import GlobalStyles from "./globalStyles";
import CurrencyButton from "./components/CurrencyButton";
import Container from "./components/CurrencyButton";
const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <CurrencyButton text={"USD"} />
        <CurrencyButton text={"ARG"} />
        <CurrencyButton text={"BTC"} />
      </Container>
    </>
  );
};

export default App;
