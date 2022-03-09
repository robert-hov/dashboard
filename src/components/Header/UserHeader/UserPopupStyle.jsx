import styled from "styled-components";
import colors from "../../../utils/theme";

export const StyledUserHeader = styled.button`
  display: flex;
  align-items: center;
  
  color: ${colors.primaryBlue};
  background-color: transparent;
  outline: none;
  border: none;
`

export const StyledUserHeaderText = styled.span`
  font-size: 0.875rem;
  line-height: 1.375rem;
  text-transform: capitalize;
`

export const StyledUserHeaderIcon = styled.div`
  position: relative;
  width: 0.625rem;
  margin-left: 0.437rem;
  
  svg {
    fill: ${colors.primaryBlue};
  }

  &::before {
    content: '';
    display: block;
    padding-top: 60%;
  }
`