import { Button as AntButton } from "antd";
import { NativeButtonProps } from "antd/lib/button/button";
import "antd/lib/button/style/css";
import * as React from "react";
import styledComponents from "styled-components";

export interface ButtonProps extends NativeButtonProps {
  status?: string;
}

export const StyledButton = styledComponents((props: ButtonProps) => (
  <AntButton {...props} />
))`
  display: inline-block;
  & span {
    font-weight: 600 !important;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
  }
  font-size:${(props) => (props.status === "submit" ? "24px;" : "14px")}; 
  color:${(props) =>
    props.status === "primary"
      ? "var(--primary-color) !important;"
      : props.status === "logout"
      ? "#b85c5c;"
      : props.status === "submit"
      ? "#fff;"
      : props.status === "secondary"
      ? "#999;"
      : props.status === "primary-active"
      ? "#fff;"
      : "#aaa"}; 
  background-color: ${(props) =>
    props.status === "primary"
      ? "#fff"
      : props.status === "primary-active"
      ? "var(--primary-color);"
      : props.status === "logout"
      ? "#fff;"
      : props.status === "submit  "
      ? "var(--primary-color);"
      : props.status === "secondary"
      ? "transparent"
      : "var(--primary-color) !important;"}; 
  border: ${(props) =>
    props.status === "primary"
      ? "1px solid var(--primary-color) !important;"
      : props.status === "logout"
      ? "1px solid #b85c5c  !important;"
      : props.status === "submit"
      ? "none"
      : props.status === "secondary"
      ? "1px solid #999 !important"
      : "1px solid transparent"}; 
  padding: ${(props) =>
    props.status === "primary"
      ? "4px 8px"
      : props.status === "primary-active"
      ? "4px 8px"
      : props.status === "logout"
      ? "#b85c5c;"
      : props.status === "submit"
      ? "10px 24px"
      : "10px 24px"};
  &:focus {${(props) =>
    props.status === "primary-active"
      ? `
        color: #fff !important;
        background-color: var(--primary-color);
        border: 1px solid var(--primary-color);
      `
      : props.status === "logout"
      ? `
        color: #fff;
        background-color: #b85c5c;
        border-color: #b85c5c;
      `
      : props.status === "submit"
      ? `
        color: #fff !important;
        background-color: #449d44 !important;
        border-color: #419641 !important;
      `
      : props.status === "secondary"
      ? `
        background-color: #ccc;
        color: #999;
      `
      : `
        color: #fff !important;
        background-color: var(--primary-color);
        border: 1px solid var(--primary-color);
      `};}
  &:hover {${(props) =>
    props.status === "primary"
      ? `
        color: #fff !important;
        background-color: var(--primary-color);
        border: 1px solid var(--primary-color);
      `
      : props.status === "logout"
      ? `
        color: #fff;
        background-color: #b85c5c;
        border-color: #b85c5c;
      `
      : props.status === "submit"
      ? `
        color: #fff !important;
        background-color: #449d44 !important;
        border-color: #419641 !important;
      `
      : props.status === "secondary"
      ? `
        background-color: #ccc;
        color: #999;
      `
      : `
        color: #fff !important;
        background-color: var(--primary-color);
        border: 1px solid var(--primary-color);
      `};}
  border-radius: 4px;
  border-color: var(--primary-color);
  height: 100%;
`;
