import React, { useEffect, useState, useContext } from "react";
import Header from "./components/Header";
import GlobalStyles from "./globalStyles";
import CurrencyButton from "./components/CurrencyButton";
import Container from "./components/Container";
import Slider from "./components/Slider";
import Table from "./components/Table";
import SearchBar from "./components/SearchBar";
import FlexWrapper from "./components/FlexWrapper";
import Favourites from "./components/Favourites";
import axios from "axios";
import { StoreContext } from "./utils/store";
const App = () => {
  
  const {currencies, loadings, markets} = useContext(StoreContext)
  const [currency, setCurrency] = currencies
  const [loading, setLoading] = loadings
  const [market, setMarket] = markets
  
  const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=15&page=1&sparkline=false`

  useEffect(() => {
    setLoading(true)
    axios
      .get(apiUrl)
      .then((res) => {
        const data = res.data;
        setLoading(false)
        setMarket(data);
      });
  }, [currency]);
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <FlexWrapper>
          <SearchBar />
          <CurrencyButton
            value={"usd"}
            text={"USD"}
          />
          <CurrencyButton
            value={"ars"}
            text={"ARG"}
          />
          <CurrencyButton
            value={"btc"}
            text={"BTC"}
          />
        </FlexWrapper>
        <Table data={market}/>
      </Container>
    </>
  );
};

export default App;
