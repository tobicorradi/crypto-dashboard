import React from "react";
import Header from "./components/Header";
import GlobalStyles from "./globalStyles";
import CurrencyButton from "./components/CurrencyButton";
import Container from "./components/Container";
import Card from "./components/Card";
const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <CurrencyButton text={"USD"} />
        <CurrencyButton text={"ARG"} />
        <CurrencyButton text={"BTC"} />
        <Card name={'Bitcoin'} symbol={'BTC'} price={'50.405'}/>
      </Container>
    </>
  );
};

export default App;
