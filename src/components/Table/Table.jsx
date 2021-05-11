import React from "react";
import { ReactComponent as Star } from "./../../assets/icons/star.svg";
import $ from "styled-components";

const $Table = $.table`
    background-color: white;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    text-align: left;
    width: 70%;
    border-spacing: 0;
    border-collapse: collapse;
    margin-top: 15px;
`;
const $Title = $.th`
    font-size: 14px;
    color: var(--text-gray);
    font-weight: 300;
    padding: 25px 0px;
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
const $Name = $.span`
    font-weight: 400;
    font-size: 17px;
`;
const $Price = $.span`
    font-size: 13px;
`
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
    <>
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
              <$Text>
                <$Name>{el.name}</$Name>
              </$Text>
              <$Text>
                ${el.current_price.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")} <$Price>{currency.toUpperCase()}</$Price>
              </$Text>
              <$Text>{el.market_cap_change_percentage_24h.toFixed(2)}%</$Text>
            </$Row>
          ))}
        </tbody>
      </$Table>
    </>
  );
};

export default Table;
