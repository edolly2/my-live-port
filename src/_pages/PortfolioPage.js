import PageTitle from "../_components/PageTitle";
import styled from "styled-components";

const PortfolioPageContainer = styled.main`
  min-height: 76vh;
`;

const PortfolioPageSubTitle = styled.h3``;

const PortfolioPage = () => {
  return (
    <PortfolioPageContainer>
      <PageTitle titleText="PORTFOLIO" />
    </PortfolioPageContainer>
  );
};

export default PortfolioPage;
