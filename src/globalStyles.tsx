import { createGlobalStyle } from "styled-components";

export const GlobleStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        font-family: 'Source Sans Pro', sans-serif; 
    }
    #root{
        margin:0 auto;
        --primary-color: #5cb85c;
    }
 `;
