import React, { useEffect, useState } from "react";

import { CgMenuGridO } from "react-icons/cg";
import { Navbar } from "./Navbar";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const HeaderContainer = styled.header`
  width: 100%;
  min-height: 10.4rem;
  max-height: 10.4rem;
  padding: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid gold;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.6);
  // margin-bottom: 7rem;
`;

const HeaderTitle = styled.h1`
  position: relative;
  z-index: 2;
  transition: all 400ms ease-in-out;
`;

const MenuIconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  transition: all 400ms ease-in-out;
`;

const Header = () => {
  const [navbarActive, setNavbarActive] = useState(false);

  return (
    <HeaderContainer>
      <HeaderTitle style={{ color: navbarActive ? "white" : "black" }}>
        Eric Dollinger
      </HeaderTitle>
      <Navbar navbarClass={!navbarActive ? "closed" : "slide"} />
      <MenuIconContainer style={{ color: navbarActive ? "white" : "black" }}>
        <CgMenuGridO
          className="icons"
          onClick={() => {
            setNavbarActive(!navbarActive);
          }}
        />
      </MenuIconContainer>
    </HeaderContainer>
  );
};

export default Header;
