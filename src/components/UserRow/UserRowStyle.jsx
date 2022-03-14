import styled, {css} from "styled-components";
import colors from "../../utils/theme";

export const StyledUserRow = styled.div`
  display: flex;
  color: ${colors.primaryBlack};
  padding-top: 0.625rem;
  padding-right: 2rem;
  padding-left: 4rem;
  padding-bottom: 0.625rem;
  border-bottom: 1px solid ${colors.primaryGray};

  font-size: 0.75rem;
  line-height: 1.5rem;

  ${props => props.header ? css `
    font-weight: 700;
  ` : ''}
`

export const StyledUserName = styled.div`
  width: 17.97%;
  flex-shrink: 0;
`

export const StyledUserSurname = styled.div`
  width: 16.014%;
  flex-shrink: 0;
`

export const StyledUserMail = styled.div`
  width: 19.925%;
  flex-shrink: 0;
`

export const StyledUserRole = styled.div`
  width: 21.135%;
  flex-shrink: 0;
`

export const StyledUserEditButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 4.655%;
  margin-left: auto;
  flex-shrink: 0;
`

export const StyledUserButton = styled.button`
  position: relative;
  width: ${props => props.width ? props.width : ''};
  background-color: transparent;
  
  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`