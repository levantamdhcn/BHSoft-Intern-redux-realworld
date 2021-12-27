import { Form, FormItemProps } from "antd";
import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import styledComponents from "styled-components";
import styled from "styled-components";

export const FormTitle = styled.h1`
  font-size: 40px;
  color: #373a3c;
  text-align: center;
  margin-bottom: 0px;
  font-weight: 400;
`;

export const FormNavigate: React.FunctionComponent<NavLinkProps> = styled(
  NavLink
)`
  font-size: 16px;
  color: var(--primary-color);
  &:hover {
    color: #3d8b3d;
    text-decoration: underline;
  }
`;

export const FormMsgList = styled.ul`
  padding-left: 20px;
  text-align: left;
  list-style-type: none;
`;

export const FormMsgItem = styled.li`
  color: #b85c5c !important;
  font-weight: 700;
  font-size: 16px;
`;

export interface FormItemPropsExtends extends FormItemProps {
  size?: string;
}

export const FormItem = styledComponents((props: FormItemPropsExtends) => (
  <Form.Item {...props} />
))`
  .ant-input {
    padding: ${(props) =>
      props.size === "large" ? "12px 13px !important;" : "7px 11px;"} 
    font.size === "large": ${(props) =>
      props.size === "large" ? "20px;" : "16px"} 
  }
  #basic_password {
    padding: 8px 13px !important;
  }
`;
