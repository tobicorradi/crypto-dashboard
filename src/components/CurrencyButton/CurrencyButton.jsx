import React, { useState } from "react";
import $ from "styled-components";
import { StoreContext } from "../../utils/store";
const $Button = $.button`
    background-color: white;
    padding: 8px 14px;
    box-shadow: var(--shadow);
    margin-right: 14px;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    border-radius: var(--radius);
    ${({ currency, value }) =>
      value === currency
        ? "background-color: var(--blue);color: white;font-weight: 700;"
        : null}
    border: 0;
    :hover{
        background-color: var(--blue);
        color: white;
        font-weight: 700;
    }
`;

const CurrencyButton = ({ text, value}) => {
  const {currencies} = React.useContext(StoreContext)
  const [currency, setCurrency] = currencies
  const changeCurrency = (value) => {
    setCurrency(value);
  };
  return (
    <$Button
      value={value}
      currency={currency}
      onClick={() => changeCurrency(value)}
    >
      {text}
    </$Button>
  );
};

export default CurrencyButton;
