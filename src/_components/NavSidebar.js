import React from "react";
import styled from "styled-components";

const NavSidebarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: black;
`;
const NavSidebarNAV = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavSidebarLIST = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100vh;
  gap: 1.6rem;
`;
const NavSidebarLISTITEM = styled.li`
  text-align: center;

  color: white;
  width: 75%;
  border-radius: 0.6rem;
  //   border: 2px solid transparent;
  padding: 0.8rem;
  &:hover {
    background: white;
    color: black;
    cursor: pointer;
    // border: 2px solid gray;
    box-shadow: 0 0 1rem white;
  }
`;

export const NavSidebar = (props) => {
  return (
    <NavSidebarContainer className={props.navSidebarClass}>
      <NavSidebarNAV>
        <NavSidebarLIST>
          <NavSidebarLISTITEM>HOME</NavSidebarLISTITEM>
          <NavSidebarLISTITEM>BIO</NavSidebarLISTITEM>
          <NavSidebarLISTITEM>PORTFOLIO</NavSidebarLISTITEM>
          <NavSidebarLISTITEM>CONTACT</NavSidebarLISTITEM>
          <NavSidebarLISTITEM>BLOG</NavSidebarLISTITEM>
        </NavSidebarLIST>
      </NavSidebarNAV>
    </NavSidebarContainer>
  );
};
