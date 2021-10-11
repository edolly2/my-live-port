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
  // text-align: center;
  display: flex;
  flex-direction: column;
  padding: 1.6rem 0;
  // gap: 1.6rem;
  // width: 100%;
`;

const ContactSectionContainer2 = styled.section`
  // text-align: center;
  padding: 1.6rem 0;
  // width: 100%;
`;

const ContactEmail = styled.input`
  // width: 100%;
  // display: flex;
  // justify-content: center;
  margin: 0 auto 1.6rem auto;
  font-size: calc(20px + (20 - 12) * (100vw - 400px) / (1920 - 400));
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

const ToolTipContainer = styled.div`
  margin: 0 auto;
`;
const ToolTipContent = styled.span``;

const copyText = () => {
  /* Get the text field */
  let getCopyText = document.getElementById("myEmail");

  /* Select the text field */
  getCopyText.select();
  getCopyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(getCopyText.value);

  /* Alert the copied text */
  // alert("Copied the text: " + getCopyText.value);
  let toolTip = document.getElementById("myToolTip");
  toolTip.innerHTML = "Copied: " + getCopyText.value;
};

const outFunc = () => {
  let tooltip = document.getElementById("myToolTip");
  tooltip.innerHTML = "Copy to clipboard";
};

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <PageTitle titleText="CONTACT ME" />
      <ContactSubTitle>EMAIL</ContactSubTitle>
      <ContactSectionContainer>
        <ContactEmail
          type="text"
          value="ekdollinger@gmail.com"
          id="myEmail"
          spellCheck="false"
          readOnly
          disabled
        />

        <ToolTipContainer className="tool-tip-container">
          <CopyBtn
            className="btn"
            onClick={() => copyText()}
            onMouseOut={() => outFunc()}
          >
            <ToolTipContent className="tool-tip-text" id="myToolTip">
              Copy to clipboard
            </ToolTipContent>
            COPY
          </CopyBtn>
        </ToolTipContainer>
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
