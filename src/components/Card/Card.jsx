import React from "react";
import { AreaChart, Area, Tooltip } from "recharts";
import $ from "styled-components";
const $Card = $.div`
  background-color: white;
`;
const $CardHeader = $.div`
  padding: 20px 30px
`;
const Card = ({ name, symbol, image, price, data }) => {
  return (
    <$Card>
      <$CardHeader>
        <div>
          <img src={image} alt="" />
          <span>{name}</span>
          <span>
            <small>{symbol}</small>
          </span>
        </div>
        <div>
          <span>
            {price} <span>USD</span>
          </span>
        </div>
      </$CardHeader>
      {/* <AreaChart
        width={300}
        height={100}
        data={data}
        strokeWidth={3}
        syncId="anyId"
      >
        <Area
          type="monotone"
          dataKey={''}
          stroke="#82ca9d"
          fill="#82ca9d"
        />
      </AreaChart> */}
    </$Card>
  );
};

export default Card;
