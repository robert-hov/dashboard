import React from "react";
import styled, {css} from "styled-components";
import colors from "../../utils/theme";

export const StyledPopupWrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${colors.primaryGrayLight075};
`

export const StyledEditPopup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  padding-top: 0.812rem;
  padding-bottom: 1.625rem;
  background-color: ${colors.primaryWhite};
`

export const StyledEditFormRow = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
  width: 100%;
`

export const StyledEditPopupBtn = styled.button.attrs(props => ({type: props.type || 'button'}))`
  padding: 0.312rem 1rem;
  border-radius: 0.125rem;
  cursor: pointer;

  color: ${colors.primaryBlack};
  background-color: transparent;
  border: 1px solid ${colors.primaryGray};

  font-size: 0.875rem;
  line-height: 1.375rem;
  text-transform: capitalize;
  ${props => props.save && css`
    background-color: ${colors.primaryBlue};
    color: ${colors.primaryWhite};
    border: none;
    margin-left: 0.75rem;
  `}
`

export const StyledEditPopupHeader = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25rem;
  margin-left: 1.187rem;
  text-transform: capitalize;
`

export const StyledEditForm = styled.form`
  margin-right: 3.125rem;
  margin-left: 3.125rem;
`

export const StyledEditLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${props => props.labelCount ? (100 / props.labelCount) - 5 : 100}%;
`
export const StyledEditLabelText = styled.span`
  color: ${props => props.importantColor ? colors.primaryRed : colors.primaryBlack};
  font-size: 0.875rem;
  line-height: 1.375rem;
  text-transform: capitalize;
`

export const StyledInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`