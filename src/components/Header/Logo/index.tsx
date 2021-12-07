import React from "react";
import { useHistory } from "react-router";

const brandNameStyles = {
  fontFamily: "Titillium Web, sans-serif",
  fontSize: "24px",
  fontWeight: "700",
  color: "#5cb85c",
  cursor: "pointer",
};

const Logo = () => {
  const history = useHistory();
  return (
    <span
      style={brandNameStyles}
      onClick={() => {
        history.push("/");
      }}
    >
      conduit
    </span>
  );
};

export default Logo;
