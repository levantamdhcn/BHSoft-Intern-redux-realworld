import { GithubFilled } from "@ant-design/icons";
import React from "react";
import { StyledFooter } from "../styled/Footer.styled";

const AppFooter = () => {
  return (
    <StyledFooter>
      <a href="https://github.com/gothinkster/react-redux-realworld-example-app">
        <GithubFilled />
        <p>Fork on GitHub</p>
      </a>
    </StyledFooter>
  );
};

export default AppFooter;
