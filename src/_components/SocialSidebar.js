import {
  FaChevronLeft,
  FaChevronRight,
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaStackOverflow,
  FaTwitterSquare,
} from "react-icons/fa";

import styled from "styled-components";
import { useState } from "react";

const SocialSidebarAside = styled.aside`
  position: fixed;
  top: 25%;
  left: 0;
  z-index: 1;
  transition: all 500ms ease-in-out;
`;
const SocialSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.6rem;
  position: relative;
  align-items: center;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
  // background-color: #fff;
  border-bottom-right-radius: 0.6rem;
  border-top-right-radius: 0.6rem;
  // background: black;
`;
const SocialSidebarCloseContainer = styled.div`
  display: flex;
  width: 1.5rem;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 5.6rem;
  top: 50%;
  transform: translate(0, -50%);
  height: 4rem;
  border-radius: 0 0.6rem 0.6rem 0;
  cursor: pointer;
  // background: black;
  // z-index: 1;
`;

const SocialSidebar = (props) => {
  const [socialSidebarClosed, setSocialSidebarClosed] = useState(false);
  console.log(socialSidebarClosed);
  return (
    <SocialSidebarAside
      style={{ marginLeft: !socialSidebarClosed ? "0rem" : "-5.7rem" }}
      id="socialAside"
    >
      <SocialSidebarContainer className={props.socialSidebarClass}>
        <FaFacebookSquare className="social-icons" />
        <FaTwitterSquare className="social-icons" />
        <FaLinkedin className="social-icons" />
        <FaGithubSquare className="social-icons" />
        <FaStackOverflow className="social-icons" />
      </SocialSidebarContainer>
      <SocialSidebarCloseContainer
        id="socialCloseContainer"
        onClick={() => setSocialSidebarClosed(!socialSidebarClosed)}
        className={props.socialSidebarExitClass}
      >
        {!socialSidebarClosed ? (
          <FaChevronLeft className="social-icons-close" />
        ) : (
          <FaChevronRight className="social-icons-close" />
        )}
      </SocialSidebarCloseContainer>
    </SocialSidebarAside>
  );
};

export default SocialSidebar;
