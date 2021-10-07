import React, { useState } from "react";

import { CgMenuGridO } from "react-icons/cg";
import { NavSidebar } from "./NavSidebar";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  padding: 0.8rem;
  display: flex;
  justify-content: space-between;
`;

const HeaderTitle = styled.h1`
  position: relative;
  z-index: 1;
  transition: all 600ms ease-in-out;
`;

const MenuIconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  transition: all 600ms ease-in-out;
`;

const Header = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  return (
    <div>
      <HeaderContainer>
        <HeaderTitle style={{ color: navbarActive ? "white" : "black" }}>
          Eric Dollinger
        </HeaderTitle>
        <NavSidebar navSidebarClass={!navbarActive ? "closed" : "slide"} />
        <MenuIconContainer style={{ color: navbarActive ? "white" : "black" }}>
          <CgMenuGridO
            className="icons"
            onClick={() => {
              setNavbarActive(!navbarActive);
            }}
          />
        </MenuIconContainer>
      </HeaderContainer>
    </div>
  );
};

export default Header;
