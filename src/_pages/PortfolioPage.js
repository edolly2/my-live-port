import PageTitle from "../_components/PageTitle";
import styled from "styled-components";

const PortfolioPageContainer = styled.main``;
const PortfolioPageTitle = styled.h2``;

const PortfolioPageSubTitle = styled.h3``;

const PortfolioPage = () => {
  return (
    <PortfolioPageContainer>
      <PageTitle titleText="PORTFOLIO" />
      <PortfolioPageSubTitle>Front-End Developer</PortfolioPageSubTitle>
    </PortfolioPageContainer>
  );
};

export default PortfolioPage;
