import React from "react";
import { ReactComponent as Star } from "./../../assets/icons/star.svg";
import $ from "styled-components";
const $Table = $.table`
    background-color: white;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    text-align: left;
    width: 70%;
`;
const $Title = $.th`
    font-size: 16px;
    color: var(--text-gray);
    font-weight: 300;
`;
const $Text = $.td`
    font-size: 18px;
    color: var(--blue);
    font-weight: bold;
    padding: 17px 0px;
    &:first-child{
      padding-left: 30px;
      width: 104px;
    }
`;
const $Row = $.tr`
    padding: 30px;
    :nth-child(even){
        background: var(--row-gray);
    }
`;
const $Image = $.img`
    width: 34px;
`;
const Table = ({ data, currency }) => {
  return (
    <$Table>
      <thead>
        <$Row>
          <th></th>
          <$Title>Logo</$Title>
          <$Title>Símbolo</$Title>
          <$Title>Nombre</$Title>
          <$Title>Cotización</$Title>
          <$Title>Market Cap (24hs)</$Title>
        </$Row>
      </thead>
      <tbody>
        {data.map((el) => (
          <$Row>
            <$Text>
              <Star />
            </$Text>
            <$Text>
              <$Image src={el.image} alt="" />
            </$Text>
            <$Text>{el.symbol.toUpperCase()}</$Text>
            <$Text>{el.name}</$Text>
            <$Text>
              ${el.current_price.toFixed(2)} {currency.toUpperCase()}
            </$Text>
            <$Text>{el.market_cap_change_percentage_24h.toFixed(2)}</$Text>
          </$Row>
        ))}
      </tbody>
    </$Table>
  );
};

export default Table;
