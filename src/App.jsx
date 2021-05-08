import React from "react";
import Header from "./components/Header";
import GlobalStyles from "./globalStyles";
import CurrencyButton from "./components/CurrencyButton";
import Container from "./components/Container";
import Slider from "./components/Slider";
import Table from "./components/Table";
const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <CurrencyButton text={"USD"} />
        <CurrencyButton text={"ARG"} />
        <CurrencyButton text={"BTC"} />
        <Slider />
        <Table />
      </Container>
    </>
  );
};

export default App;
