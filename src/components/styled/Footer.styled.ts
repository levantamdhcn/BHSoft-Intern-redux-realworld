import { LayoutProps } from "antd";
import { Footer } from "antd/lib/layout/layout";
import styled from "styled-components";

export const StyledFooter: React.FunctionComponent<LayoutProps> = styled(
  Footer
)`
  text-align: center;
  background: linear-gradient(#485563, #29323c) !important;
  padding: 0 !important;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  & a {
    font-family: "Source Sans Pro";
    display: block;
    color: #fff !important;
    padding: 15px;
    font-size: 24px;
    box-shadow: 0 5px 5px 5px rgb(0 0 0 / 40%);
    font-weight: 600;
    & p {
      &:hover {
        text-decoration: underline;
      }
    }
  }
  & p {
    display: inline-block;
    margin: 0 0 0 10px !important;
  }
`;
