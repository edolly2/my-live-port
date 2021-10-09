import { NavLink } from "react-router-dom";
import React from "react";
import { device } from "./DeviceSizes";
import styled from "styled-components";
import { useState } from "react";

const NavbarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: black;
  z-index: 1;
`;
const NavbarNAV = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavbarLIST = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100vh;
  gap: 1.6rem;
`;
const NavbarLISTITEM = styled.li`
  text-align: center;

  // color: white;
  width: 75%;
  border-radius: 0.6rem;
  //   border: 2px solid transparent;
  padding: 0.8rem;
  @media screen and ${device.minTablet} {
    font-size: 3rem;
  }
  @media screen and ${device.minLaptop} {
    font-size: 4rem;
  }
`;

export const Navbar = (props) => {
  return (
    <NavbarContainer className={props.navbarClass}>
      <NavbarNAV>
        <NavbarLIST>
          <NavLink
            exact
            to="/"
            activeClassName="active-nav-link"
            className="link"
          >
            <NavbarLISTITEM>HOME</NavbarLISTITEM>
          </NavLink>
          <NavLink to="/bio" activeClassName="active-nav-link" className="link">
            <NavbarLISTITEM>BIO</NavbarLISTITEM>
          </NavLink>
          <NavLink
            to="/portfolio"
            activeClassName="active-nav-link"
            className="link"
          >
            <NavbarLISTITEM>PORTFOLIO</NavbarLISTITEM>
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="active-nav-link"
            className="link"
          >
            <NavbarLISTITEM>CONTACT</NavbarLISTITEM>
          </NavLink>
          <NavLink
            to="/blog"
            activeClassName="active-nav-link"
            className="link"
          >
            <NavbarLISTITEM>BLOG</NavbarLISTITEM>
          </NavLink>
        </NavbarLIST>
      </NavbarNAV>
    </NavbarContainer>
  );
};
