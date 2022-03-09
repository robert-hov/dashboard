import React from "react";
import styled from "styled-components";
import colors from "../../utils/theme";
import Nav from "./Nav/Nav";
import UserHeader from "./UserHeader/UserPopup";

const StyledHeaderWrapper = styled.div`
  height: max-content;
  width: 100%;

  background-color: ${colors.primaryWhite};

`

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-shrink: 0;
  flex-grow: 0;

`

const StyledHeaderTitle = styled.span`
  color: ${colors.primaryBlack}

  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.25rem;
`

const Header = () => {
    return (
        <StyledHeaderWrapper>
        <div className="container">
            <StyledHeader>
                <StyledHeaderTitle>
                    DoBro
                </StyledHeaderTitle>
                <Nav/>
                <UserHeader/>
            </StyledHeader>
        </div>
        </StyledHeaderWrapper>
    )
}

export default Header