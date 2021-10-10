import ContactFormComponent from "../_components/ContactForm";
import PageTitle from "../_components/PageTitle";
import styled from "styled-components";

const ContactPageContainer = styled.main`
  // padding-bottom: 5rem;
  min-height: 76vh;
`;

const ContactSubTitle = styled.h3`
  text-align: center;
  margin-top: 7rem;
  color: gold;
`;

const ContactSubTitle2 = styled.h3`
  text-align: center;
  padding: 1.6rem 0;
  color: gold;
`;

const ContactSectionContainer = styled.section`
  text-align: center;
  padding: 1.6rem 0;
  // width: 100%;
`;

const ContactSectionContainer2 = styled.section`
  // text-align: center;
  padding: 1.6rem 0;
  // width: 100%;
`;

const ContactEmail = styled.p`
  width: 100%;
  // display: flex;
  // justify-content: center;
  margin-bottom: 1.6rem;
`;

const Underline = styled.hr`
  color: black;
  background: black;
  height: 0.1rem;
  width: 75%;
  margin: 1.6rem auto;
`;

const CopyBtn = styled.button`
font-size: 1.8rem
box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
margin: 0 auto;
`;

const OrTitleContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  margin: 3.2rem auto;
  // margin: 0 auto;
  // background: green;
  border: 2px solid black;
  transform: rotate(5deg);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
  border-radius: 0.6rem;
`;
const OrTitleText = styled.h3`
  width: 100%;
  background: black;
  color: white;
  text-align: center;
  transform: rotate(-5deg);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
  padding: 0.8rem;
  border-radius: 0.6rem;
`;

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <PageTitle titleText="CONTACT ME" />
      <ContactSubTitle>EMAIL</ContactSubTitle>
      <ContactSectionContainer>
        <ContactEmail>Ekdollinger@gmail.com</ContactEmail>
        <CopyBtn className="btn">COPY</CopyBtn>
      </ContactSectionContainer>
      <Underline />
      <OrTitleContainer>
        <OrTitleText>OR</OrTitleText>
      </OrTitleContainer>
      <Underline />
      <ContactSubTitle2>
        I WOULD LOVE <br />
        TO
        <br /> HEAR FROM YOU
      </ContactSubTitle2>
      <ContactSectionContainer2>
        <ContactFormComponent />
      </ContactSectionContainer2>
    </ContactPageContainer>
  );
};

export default ContactPage;
