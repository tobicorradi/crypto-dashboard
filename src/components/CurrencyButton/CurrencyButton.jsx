import React from "react";
import $ from "styled-components";
const $Button = $.button`
    background-color: white;
    padding: 8px 14px;
    box-shadow: var(--shadow);
    margin-right: 14px;
    margin-top: 10px;
    cursor: pointer;
    border-radius: var(--radius);
    border: 0;
    :hover{
        background-color: var(--blue);
        color: white;
        font-weight: 700;
    }
`
const CurrencyButton = ({ text, currency }) => {
  return <$Button>{text}</$Button>;
};

export default CurrencyButton;
