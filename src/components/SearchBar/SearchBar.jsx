import React from "react";
import $ from "styled-components";
const $SearchBar = $.input`
    box-shadow: var(--shadow);
    padding: 13px 30px;
    font-size: 16px;
    margin-right: 25px;
    border: 0;
`
const SearchBar = () => {
  return (
    <div>
      <$SearchBar type="text" placeholder="'Bitcoin'" />
    </div>
  );
};

export default SearchBar;
