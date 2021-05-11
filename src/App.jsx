import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import GlobalStyles from "./globalStyles";
import CurrencyButton from "./components/CurrencyButton";
import Container from "./components/Container";
import Slider from "./components/Slider";
import Table from "./components/Table";
import SearchBar from "./components/SearchBar";
import FlexWrapper from "./components/FlexWrapper";
import axios from "axios";
const App = () => {
  const [market, setMarket] = useState([]);
  const [currency, setCurrency] = useState("usd");
  const [favourite, setFavourite] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=15&page=1&sparkline=false`
      )
      .then((res) => {
        const data = res.data;
        setMarket(data);
      });
  }, [currency]);
  console.log(market);
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <Slider />
        <FlexWrapper>
          <SearchBar />
          <CurrencyButton
            value={"usd"}
            currency={currency}
            setCurrency={setCurrency}
            text={"USD"}
          />
          <CurrencyButton
            value={"ars"}
            currency={currency}
            setCurrency={setCurrency}
            text={"ARG"}
          />
          <CurrencyButton
            value={"btc"}
            currency={currency}
            setCurrency={setCurrency}
            text={"BTC"}
          />
        </FlexWrapper>
        <Table data={market} currency={currency} />
      </Container>
    </>
  );
};

export default App;
