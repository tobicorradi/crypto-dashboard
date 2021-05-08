import React from "react";
import { ReactComponent as Star } from "./../../assets/icons/star.svg";
import $ from "styled-components";
const $Table = $.table`
    background-color: white;
    border-radius: var(--radius);
    width: 70%;
    text-align: left;
`;
const $Title = $.th`
    font-size: 16px;
    color: var(--text-gray);
    font-weight: 300;
`;
const $Text = $.td`
    font-size: 17px;
    color: var(--blue);
    font-weight: bold;
`;
const $Row = $.tr`
    padding: 30px;
    :nth-child(even){
        background: var(--row-gray);
    }
`;
const Table = ({data}) => {
  return (
    <$Table>
      <thead>
        <$Row>
          <th></th>
          <$Title>Logo</$Title>
          <$Title>Símbolo</$Title>
          <$Title>Nombre</$Title>
          <$Title>Cotización</$Title>
          <$Title>Variación</$Title>
        </$Row>
      </thead>
      <tbody>
        <$Row>
          <td>
            <Star />
          </td>
          <$Text>Logo</$Text>
          <$Text>BTC</$Text>
          <$Text>Bitcoin</$Text>
          <$Text>50.345usd</$Text>
          <$Text>3.45%</$Text>
        </$Row>
      </tbody>
    </$Table>
  );
};

export default Table;
