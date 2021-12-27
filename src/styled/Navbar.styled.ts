import styled from "styled-components";

export const Navbar = styled.ul`
  list-style-type: none;
  display: flex;
  margin-bottom: 0 !important;
`;

export const NavItem = styled.li`
  margin-left: 16px;
  & a {
    font-size: 14.8px;
    color: rgba(0, 0, 0, 0.3);
    font-weight: 700;
  }
  & a svg {
    margin-right: 5px;
  }
  &:first-child {
    margin-left: 0;
  }
`;
