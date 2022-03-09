import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
  border: none;
  border-radius: 0.125rem;
  
  color: ${props => props.color ? props.color : ''};
  background-color: ${props => props.bgColor ? props.bgColor : ''};
  
  font-size: 1rem;
  text-transform: capitalize;
  text-align: center;
`

const StyledButton = ({text, color, bgColor}) => {
    return <StyledBtn color={color} bgColor={bgColor}>{text}</StyledBtn>
}

export default StyledButton;