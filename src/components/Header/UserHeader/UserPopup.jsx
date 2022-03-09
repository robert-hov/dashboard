import React from "react";
import {StyledUserHeader, StyledUserHeaderIcon, StyledUserHeaderText} from "./UserPopupStyle";

const UserHeader = () => {
    return (
        <StyledUserHeader>
            <StyledUserHeaderText>Name Surname</StyledUserHeaderText>
            <StyledUserHeaderIcon>
                <span className="img-container">
                    <svg className="icon">
                      <use xlinkHref="#arrow-bottom" />
                    </svg>
                </span>
            </StyledUserHeaderIcon>
        </StyledUserHeader>
    )
}

export default UserHeader;