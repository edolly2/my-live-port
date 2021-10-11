import { AiFillHtml5 } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import PageTitle from "../_components/PageTitle";
import { SiJavascript } from "react-icons/si";
import styled from "styled-components";

const BioPageContainer = styled.main`
  min-height: 76vh;
`;

const BioSubTitleTop = styled.h3`
  text-align: center;
  margin-top: 7rem;
  color: gold;
`;

const BioSubTitle = styled.h3`
  text-align: center;
  color: gold;
`;

const BioSectionContainer = styled.section`
  text-align: center;
  padding: 0 0 1.6rem 0;
  width: 75%;
  margin: 0 auto;
`;

const AboutList = styled.ul`
  padding: 1.6rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // width: 75%;
  margin: 0 auto;
`;

const AboutListItem = styled.li`
  // padding: 1.6rem 0;
  // width: 100%;
`;

const ArticleInfo = styled.article`
  // padding: 1.6rem 0;
  // width: 100%;
  text-align: left;
  text-indent: 1.6rem;
  font-size: 1.8rem;
  line-height: 1.2;
  // color: rgba(0, 0, 0, 0.3);
`;

const Underline = styled.hr`
  color: black;
  background: black;
  height: 0.1rem;
  width: 100%;
  margin: 1.6rem auto;
`;

const IconLink = styled.a`
  color: gold;
  font-size: 2.2rem;
  vertical-align: bottom;
  line-height: 0.1;
  padding: 0 0.4rem;
  &:hover {
    color: green;
  }
`;

const SkillBar = styled.div`
  background-color: black;
  border-radius: 13px;
  /* (height of inner div) / 2 + padding */
  padding: 3px;
  margin: 0.8rem 0 1.6rem 0;
`;

const SkillBarTitle = styled.p`
  display: flex;
  width: 100%;
`;

const SkillBarInnerHtml = styled.div`
  background-color: green;
  width: 100%;
  /* Adjust with JavaScript */
  height: 20px;
  border-radius: 10px;
`;

const SkillBarInnerCss = styled.div`
  background-color: rgb(133, 163, 0);
  width: 92%;
  /* Adjust with JavaScript */
  height: 20px;
  border-radius: 10px;
`;

const SkillBarInnerJs = styled.div`
  background-color: rgb(172, 175, 4);
  width: 85%;
  /* Adjust with JavaScript */
  height: 20px;
  border-radius: 10px;
`;

const SkillBarInnerReact = styled.div`
  background-color: rgb(229, 233, 1);
  width: 69%;
  height: 20px;
  border-radius: 10px;
`;

const BioPage = () => {
  return (
    <BioPageContainer>
      <PageTitle titleText="BIO" />
      <BioSubTitleTop>ABOUT</BioSubTitleTop>
      <BioSectionContainer>
        <AboutList>
          <AboutListItem>Name: Eric Dollinger</AboutListItem>
          <AboutListItem>Birthday: May 3, 1991</AboutListItem>
          <AboutListItem>Birthplace: Rome, NY</AboutListItem>
          <AboutListItem>Current Location: Omaha, NE</AboutListItem>
          <AboutListItem>Experience: 2.5 Years</AboutListItem>
          <AboutListItem>Work Environment: Linux</AboutListItem>
        </AboutList>
        <Underline />
        <ArticleInfo>
          My Name is Eric and I am a Front-end Developer. I have a beautiful
          fiance and a gorgeous new baby.
        </ArticleInfo>
        <br />
        <ArticleInfo>
          Front-end Development is my passion and number one hobby. When I am
          not creation in mode, I love spending my time with my family.
        </ArticleInfo>
        <Underline />
      </BioSectionContainer>
      <BioSubTitle>SKILLS</BioSubTitle>
      <BioSectionContainer>
        <SkillBarTitle>
          HTML <AiFillHtml5 className="skill-icon" />
        </SkillBarTitle>
        <SkillBar>
          <SkillBarInnerHtml />
        </SkillBar>

        <SkillBarTitle>
          CSS <DiCss3 className="skill-icon" />
        </SkillBarTitle>
        <SkillBar>
          <SkillBarInnerCss />
        </SkillBar>

        <SkillBarTitle>
          JavaScript <SiJavascript className="skill-icon" />
        </SkillBarTitle>
        <SkillBar>
          <SkillBarInnerJs />
        </SkillBar>

        <SkillBarTitle>
          ReactJS <FaReact className="skill-icon" />
        </SkillBarTitle>
        <SkillBar>
          <SkillBarInnerReact />
        </SkillBar>
      </BioSectionContainer>
      <BioSubTitle>EDUCATION</BioSubTitle>
      <BioSectionContainer>
        <Underline />
        <ArticleInfo>
          I am completely self taught but have gained the knowledge necessary to
          compete with anybody that holds a college degree.
        </ArticleInfo>
        <br />
        <ArticleInfo>
          I consistently work to expand my knowledge to hone my skills and keep
          up with industry standards.
        </ArticleInfo>
        <br />
        <ArticleInfo>
          You can check out my{" "}
          <IconLink href="">
            <BsLinkedin />
          </IconLink>{" "}
          for more info, as well as the entire list of my various
          certifications.
        </ArticleInfo>
        <Underline />
      </BioSectionContainer>
    </BioPageContainer>
  );
};

export default BioPage;
