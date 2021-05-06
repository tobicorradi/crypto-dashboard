import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: unset;
        font-family: 'Roboto', sans-serif;
    }
    :root{
        --blue: #131B5A;
        --text-gray: #A5A7B9;
        --row-gray: #FAFAFA;
        --green: #0BC729;
        --red: #EF2828;
        --shadow: 0px 4px 8px rgba(255, 49, 49, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(94, 187, 255, 0.04);
        --radius: 5px;
    }
    body{
        background-color: #F2F6FF;
    }
`;
export default GlobalStyle;
