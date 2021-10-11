import styled from "styled-components";

const RadioSelectionContainer = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items-center;

`;
const RadioSelectionSection = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items-center;
gap: 0.8rem;

`;
const RadioSelectionInput = styled.input`
  //   font-size: 1.8rem;
`;
const RadioSelectionLabel = styled.label`
  font-size: 1.6rem;
  white-space: nowrap;
`;

const RadioSelection = (props) => {
  //   const radioClickHandler = (event) => {
  //     console.log(event.currentTarget.value);
  //   };

  return (
    <RadioSelectionContainer>
      <form>
        <RadioSelectionSection>
          <RadioSelectionLabel htmlFor="static">
            <RadioSelectionInput
              className="radios"
              type="radio"
              id={props.staticId}
              name="projects"
              value="static"
              className="radio-btns"
              onClick={props.radioClicked}
              onChange={props.radioChange}
              defaultChecked
            />
            Static HTML/CSS
          </RadioSelectionLabel>
          <RadioSelectionLabel htmlFor="react">
            <RadioSelectionInput
              className="radios"
              type="radio"
              id={props.reactId}
              name="projects"
              value="react"
              onClick={props.radioClicked}
              onChange={props.radioChange}
            />
            ReactJS
          </RadioSelectionLabel>
        </RadioSelectionSection>
        <RadioSelectionSection>
          <RadioSelectionLabel htmlFor="jsjq">
            <RadioSelectionInput
              className="radios"
              type="radio"
              id={props.jsjqId}
              name="projects"
              value="jsjq"
              onClick={props.radioClicked}
              onChange={props.radioChange}
            />
            JavaScript & JQuery
          </RadioSelectionLabel>

          <RadioSelectionLabel htmlFor="vanilla">
            <RadioSelectionInput
              className="radios"
              type="radio"
              id={props.vanillaId}
              name="projects"
              value="vanilla"
              onClick={props.radioClicked}
              onChange={props.radioChange}
            />
            Vanilla JavaScript
          </RadioSelectionLabel>
        </RadioSelectionSection>
      </form>
    </RadioSelectionContainer>
  );
};

export default RadioSelection;
