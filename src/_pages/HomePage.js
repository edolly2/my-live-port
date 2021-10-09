import PageTitle from "../_components/PageTitle";
import styled from "styled-components";

const HomePageContainer = styled.main``;
const HomePageTitle = styled.h2``;

const HomePageSubTitle = styled.h3``;

const HomePage = () => {
  return (
    <HomePageContainer>
      <PageTitle titleText="ERIC DOLLINGER" />
      <HomePageSubTitle>Front-End Developer</HomePageSubTitle>
    </HomePageContainer>
  );
};

export default HomePage;
