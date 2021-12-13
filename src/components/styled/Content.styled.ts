import styled from "styled-components";
import { Layout, LayoutProps } from "antd";

export const Content: React.FunctionComponent<LayoutProps> = styled(
  Layout.Content
)`
  padding: 0 50px 100px 50px;
`;

export const SmallContent: React.FunctionComponent<LayoutProps> = styled(
  Layout.Content
)`
  padding: 0 50px;
`;
