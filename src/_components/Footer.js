import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 1.6rem;
  min-height: 10.4rem;
  max-height: 10.4rem;
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.6);
  margin-top: 5rem;
  background: black;
  border-top: 2px solid gold;
`;

const Footer = () => {
  return <FooterContainer></FooterContainer>;
};

export default Footer;
