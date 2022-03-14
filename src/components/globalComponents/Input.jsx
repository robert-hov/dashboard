import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  position: relative;
  display: flex;
  width: 100%;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : ''};
`

const StyledInpt = styled.input.attrs(props => ({
    type: props.type,
    required: props.required
}))`
  width: 100%;
  padding-top: 0.562rem;
  padding-bottom: 0.562rem;
  padding-left: 2.25rem;
  padding-right: 0.5rem;
  font-size: 1rem;
  line-height: 1.375rem;

  border: 1px solid ${props => props.border ? props.border : ''};
  border-radius: 0.125rem;
  
  color: ${props => props.color ? props.color : ""};
  background-color: ${props => props.bgColor ? props.bgColor : ''};
  
  &:focus {
    outline: 1px solid ${props => props.whenFocus ? props.whenFocus : ""};
  }
`

const StyledIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 0.83rem;
  width: 0.839rem;
  transform: translateY(-50%);
  
  svg {
    fill: ${props => props.iconColor ? props.iconColor : ''};
  }

  &::before {
    content: '';
    display: block;
    padding-top: 107%;
  }
`

const StyledInput = ({bgColor, color, placeholder, children, iconColor, border, type, marginBottom, whenFocus, onChange, required}) => {
    return (
        <StyledLabel marginBottom={marginBottom}>
            <StyledInpt type={type} onChange={onChange} bgColor={bgColor} color={color} placeholder={placeholder} whenFocus={whenFocus} border={border} required={required}/>
            {iconColor && (
                <StyledIcon iconColor={iconColor}>
                    {children}
                </StyledIcon>
            )}
        </StyledLabel>
    )
}

export default StyledInput;