import PageTitle from "../_components/PageTitle";
import RadioSelection from "../_components/RadioSelection";
import styled from "styled-components";
import { useState } from "react";

const WorkPageContainer = styled.main`
  min-height: 76vh;
  width: 75%;
  margin: 0 auto;
`;

const WorkPageSubTitle = styled.h3`
  color: gold;
  text-align: center;
  &:first-of-type {
    margin-top: 7rem;
  }
`;

const WorkPageSectionContainer = styled.div`
  min-height: 25vh;
  max-height: 25vh;
  min-width: 100%;
  max-width: 100%;
`;

const WorkPage = () => {
  const [whichChecked, setWhichChecked] = useState(null);
  const [whichColor, setWhichColor] = useState(<h1>blue</h1>);

  let counter = 0;
  const radioChangeHandler = () => {
    counter++;
    console.log(counter);
  };
  const radioClickHandler = (event) => {
    // if (whichChecked === "static") {
    //   setWhichColor(<h1>blue</h1>);
    //   // console.log(color);
    // }
    if (event.checked === "vanilla") {
      setWhichColor(<h1>red</h1>);
      return whichColor;
      // console.log(color);
    }
    // if (whichChecked === "jsjq") {
    //   setWhichColor(<h1>green</h1>);
    //   // console.log(color);
    // }
    // if (whichChecked === "react") {
    //   setWhichColor(<h1>yellow</h1>);
    //   // console.log(color);
    // }
    console.log(document.querySelectorAll(".radios").checked);
    // console.log(event.target);
    setWhichChecked(event.currentTarget.value);
  };
  console.log(whichChecked);

  // const display = () => {
  //   if (document.getElementById("staticId").checked) {
  //     setWhichChecked("static");
  //     console.log(whichChecked);
  //   } else if (document.getElementById("vanillaId").checked) {
  //     setWhichChecked("vanilla");
  //     console.log(whichChecked);
  //   } else if (document.getElementById("jsjqId").checked) {
  //     setWhichChecked("jsjq");
  //     console.log(whichChecked);
  //   } else if (document.getElementById("reactId").checked) {
  //     setWhichChecked("react");
  //     console.log(whichChecked);
  //   } else {
  //     setWhichChecked("");
  //     console.log(whichChecked);
  //   }
  // };

  return (
    <WorkPageContainer>
      <PageTitle titleText="MY WORK" />
      <WorkPageSubTitle>MY COMPLETED CREATIONS</WorkPageSubTitle>
      <WorkPageSectionContainer></WorkPageSectionContainer>
      <WorkPageSubTitle>MY PROJECTS</WorkPageSubTitle>
      <RadioSelection
        staticId="static"
        reactId="react"
        jsjqId="jsjq"
        vanillaId="vanilla"
        radioClicked={radioClickHandler}
        radioChange={radioChangeHandler}
      />
      <WorkPageSectionContainer>{whichColor}</WorkPageSectionContainer>
      <WorkPageSubTitle>MY COMPONENTS</WorkPageSubTitle>
      <WorkPageSectionContainer></WorkPageSectionContainer>
    </WorkPageContainer>
  );
};

export default WorkPage;
