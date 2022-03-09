import styled from "styled-components";
import colors from "../../utils/theme";

export const StyledLoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 27.086%;
`

export const StyledLoginTitle = styled.h2`
  margin-bottom: 2.5rem;

  color: ${colors.primaryBlue};

  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  text-align: center;
`

export const StyledForgotContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledRememberLabel = styled.label`
  display: flex;
  align-items: center;
`
export const StyledRememberCheckboxContainer = styled.div`
  position: relative;
`

export const StyledRememberCheckboxIcon = styled.div`
  position: absolute;
  width: 0.687rem;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);

  svg {
    transition: 200ms All;
    fill: ${colors.primaryWhite};
    visibility: hidden;
    opacity: 0;
  }

  &::before {
    content: '';
    display: block;
    padding-top: 107%;
  }
`

export const StyledRememberCheckbox = styled.input.attrs(props => ({
    type: props.type ? props.type : 'checkbox',
}))`
  width: 1rem;
  height: 1rem;
  margin: 0;
  border-radius: 0.125rem;
  appearance: none;
  background-color: ${colors.primaryWhite};
  
  &:checked {
    background-color: ${colors.primaryBlue};
  }

  &:checked + div svg {
    visibility: visible;
    opacity: 1;
  }
`

export const StyledRememberText = styled.span`
  padding-left: 0.5rem;
  color: ${colors.primaryBlack};
  
  font-size: 0.875rem;
  line-height: 1.375rem;
`

export const StyledForgotText = styled.a`
  color: ${colors.primaryBlue};

  font-size: 1rem;
  line-height: 2.25rem;
`
