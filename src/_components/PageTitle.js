import { device } from "./DeviceSizes";
import styled from "styled-components";

const PageTitleContainer = styled.div`
  // width: 75%;
  width: fit-content;
  display: flex;
  justify-content: center;
  margin: 7rem auto 0 auto;
  // margin: 0 auto;
  // background: green;
  border: 2px solid black;
  transform: rotate(5deg);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
  border-radius: 0.6rem;
  @media screen and ${device.minTablet} {
    width: 50%;
  }
`;
const PageTitleText = styled.h2`
  width: 100%;
  background: black;
  color: white;
  text-align: center;
  transform: rotate(-5deg);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
  padding: 0.8rem;
  border-radius: 0.6rem;
  @media screen and ${device.minTablet} {
    font-size: 4rem;
  }
  @media ${device.minLaptop} {
    font-size: 6rem;
    white-space: nowrap;
  }
`;

const PageTitle = (props) => {
  return (
    <PageTitleContainer>
      <PageTitleText>{props.titleText}</PageTitleText>
    </PageTitleContainer>
  );
};

export default PageTitle;
