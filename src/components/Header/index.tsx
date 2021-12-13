import { Header } from "../styled/Header.styled";
import React from "react";
// import Logo from "./Logo";
import NavBar from "./NavBar";
import { Logo } from "../styled/Logo.styled";
import { useHistory } from "react-router-dom";

const AppHeader = () => {
  const history = useHistory();
  return (
    <Header>
      <Logo
        onClick={() => {
          history.push("/");
        }}
      >
        conduit
      </Logo>
      <NavBar />
    </Header>
  );
};

export default AppHeader;
