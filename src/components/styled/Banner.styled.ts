import styled from "styled-components";

export const Banner = styled.div`
  padding: 32px;
  text-align: center;
  background-color: var(--primary-color);
  box-shadow: inset 0 8px 8px -8px rgb(0 0 0 / 30%),
    inset 0 -8px 8px -8px rgb(0 0 0 / 30%);
  margin-bottom: 32px;
  & h1 {
    font-family: "Titillium Web", "sans-serif";
    font-weight: bold;
    font-size: 56px;
    margin-bottom: 0;
    text-shadow: 0 1px 3px rgb(0 0 0 / 30%);
    color: #fff;
    line-height: 60px;
  }
  & p {
    font-family: "Titillium Web", "sans-serif";
    font-weight: 300;
    font-size: 24px;
    margin-bottom: 0;
    text-shadow: 0 1px 3px rgb(0 0 0 / 30%);
    margin-bottom: 0;
    color: #fff;
  }
`;
