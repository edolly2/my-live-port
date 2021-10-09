import { device } from "./DeviceSizes";
import styled from "styled-components";

const ContactFormContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 75%;
  @media ${device.minTablet} {
    width: 50%;
  }
  @media ${device.minLaptop} {
    width: 30%;
  }
`;
const ContactFormLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
`;
const ContactFormInput = styled.input`
  font-size: 1.6rem;
  padding: 0.8rem 0 0.8rem 1.6rem;
  border-radius: 0.6rem;
  border: 2px solid rgba(0, 0, 0, 0.3);
`;
const ContactFormTextArea = styled.textarea`
  margin-bottom: 1.6rem;
  padding: 0.8rem;
  font-size: 1.6rem;
  border-radius: 0.6rem;
  border: 2px solid rgba(0, 0, 0, 0.3);
`;
const ContactFormBtn = styled.button`
  margin: 0 auto;
`;

const ContactFormComponent = () => {
  return (
    <ContactFormContainer>
      <ContactForm>
        <ContactFormLabel htmlFor="name">
          Full Name:
          <ContactFormInput
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            spellcheck="false"
          />
        </ContactFormLabel>
        <ContactFormLabel htmlFor="email">
          Email:
          <ContactFormInput
            type="email"
            name="email"
            id="email"
            placeholder="example@email.com"
            spellcheck="false"
          />
        </ContactFormLabel>
        <ContactFormLabel htmlFor="thoughts">
          Your Thoughts:
          <ContactFormTextArea
            name="thoughts"
            id="thoughts"
            placeholder="I appreciate your interest!"
            cols="30"
            rows="10"
            spellcheck="true"
          />
        </ContactFormLabel>
        <ContactFormBtn className="btn">SEND</ContactFormBtn>
      </ContactForm>
    </ContactFormContainer>
  );
};

export default ContactFormComponent;
