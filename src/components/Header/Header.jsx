import React from "react";
import Container from "./../Container";
import $ from "styled-components";
const $Header = $.div`
    background-color: white;
    padding: 25px 0;
    box-shadow: var(--shadow);
`;
const $Title = $.h1`
    color: var(--blue)
`;
const $Subtitle = $.span`
    color: var(--text-gray);
    font-size: 14px;
    font-weight: 400;
`;
const Header = () => {
  return (
    <$Header>
      <Container>
        <$Title>
          Crypto Dashboard <$Subtitle>by Toby Corradi</$Subtitle>
        </$Title>
      </Container>
    </$Header>
  );
};

export default Header;
