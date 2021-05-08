import React from "react";
import { ReactComponent as Star } from "./../../assets/icons/star.svg";
const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Logo</th>
          <th>Símbolo</th>
          <th>Nombre</th>
          <th>Cotización</th>
          <th>Variación</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Star /></td>
          <td>Logo</td>
          <td>BTC</td>
          <td>Bitocin</td>
          <td>50.345usd</td>
          <td>3.45%</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
