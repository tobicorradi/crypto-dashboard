import React from "react";
import $ from "styled-components";
const $FlexWrapper = $.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify || "flex-start"};
  margin: ${(props) => props.margin || "0"};
  flex: ${(props) => props.flex || "0 1 auto"};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
`;
const FlexWrapper = ({ children, justify, margin, flex, flexWrap }) => {
  return (
    <$FlexWrapper
      className="flex-container"
      justify={justify}
      margin={margin}
      flex={flex}
      flexWrap={flexWrap}
    >
      {children}
    </$FlexWrapper>
  );
};

export default FlexWrapper;