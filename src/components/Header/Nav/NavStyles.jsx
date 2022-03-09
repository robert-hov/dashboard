import styled from "styled-components";
import colors from "../../../utils/theme";
import {NavLink} from "react-router-dom";

export const NavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`

export const NavItem = styled.li`
  display: block;
  padding: 0 1.25rem;
`

export const Link = styled(NavLink).attrs({
    exact: true
})`
  display: block;
  padding: 1.25rem 0;
  border-bottom: 0.25rem solid ${colors.primaryBlue};

  color: ${colors.primaryBlack};
  
  font-size: 0.875rem;
  line-height: 1.375rem;
  text-decoration: none;
`
