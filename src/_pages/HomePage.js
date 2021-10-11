import PageTitle from "../_components/PageTitle";
import styled from "styled-components";

const HomePageContainer = styled.main`
  min-height: 76vh;
`;
const HomePageTitle = styled.h2``;

const HomePageSubTitle = styled.h3``;

const HomePage = () => {
  return (
    <HomePageContainer>
      <PageTitle titleText="ERIC DOLLINGER" />
      <HomePageSubTitle>FRONT-END DEVELOPER</HomePageSubTitle>
      <HomePageSubTitle>MY WORK</HomePageSubTitle>
    </HomePageContainer>
  );
};

export default HomePage;
