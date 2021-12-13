import { Header as AntHeader } from "antd/lib/layout/layout";
import { PageHeaderProps } from "antd";
import styled from "styled-components";

export const Header: React.FunctionComponent<PageHeaderProps> = styled(
  AntHeader
)`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
`;
