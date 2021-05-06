import React from "react";
import $ from "styled-components";

const $Container = $.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 30px;
`;
const Container = ({ children }) => {
  return <$Container>{children}</$Container>;
};

export default Container;
