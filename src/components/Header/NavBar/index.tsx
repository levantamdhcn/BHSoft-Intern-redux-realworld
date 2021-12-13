import React from "react";
import { NavLink } from "react-router-dom";
import { FormOutlined, SettingOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Navbar, NavItem } from "../../styled/Navbar.styled";

const NavBar = () => {
  const isSignedIn = useSelector(
    (state: any) => state.authReducers.isSigninSuccess
  );
  const username = useSelector(
    (state: any) => state.authReducers.currentUser.username
  );

  return (
    <div>
      {isSignedIn ? (
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
            <NavLink to={`/profile/${username}`}>{username}</NavLink>
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
