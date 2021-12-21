import React from "react";
import { NavLink } from "react-router-dom";
import { FormOutlined, SettingOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Navbar, NavItem } from "../../styled/Navbar.styled";

const NavBar = () => {
  const token = useSelector(
    (state: any) => state.authReducers.token
  );
  const user = useSelector(
    (state: any) => state.authReducers.user
  ); 

  return (
    <div>
      {token !== "" ? (
        <Navbar>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/editor">
              <FormOutlined />
              New Post
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/setting">
              <SettingOutlined />
              Setting
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={`/profile/${user.username}`}>{user.username}</NavLink>
          </NavItem>
        </Navbar>
      ) : (
        <Navbar className="navbar">
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/signin">Sign in</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/signup">Sign up</NavLink>
          </NavItem>
        </Navbar>
      )}
    </div>
  );
};

export default NavBar;
