import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import GlobalStyles from "./globalStyles";
import CurrencyButton from "./components/CurrencyButton";
import Container from "./components/Container";
import Slider from "./components/Slider";
import Table from "./components/Table";
import axios from "axios";
const App = () => {
  const [market, setMarket] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        const data = res.data;
        setMarket(data);
      });
  }, []);
  console.log(market)
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
