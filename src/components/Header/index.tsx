import { Header } from "antd/lib/layout/layout";
import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";

const headerStyles = {
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "space-between",
};

const AppHeader = () => {
  return (
    <Header style={headerStyles}>
      <Logo />
      <NavBar />
    </Header>
  );
};

export default AppHeader;
