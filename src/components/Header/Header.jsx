import React from "react";
import Container from "./../Container";
import $ from "styled-components";
const $Header = $.div`
    background-color: white;
    padding: 25px 0;
`;
const Header = () => {
  return (
    <$Header>
      <Container>
        <h1>
          Crypto Dashboard <span>by Toby Corradi</span>
        </h1>
      </Container>
    </$Header>
  );
};

export default Header;
