import React from "react";
import {StyledUserBoard} from "./UserBoardStyle";
import UserRow from "../../components/UserRow/UserRow";

const UserBoard = () => {
    return (
        <div className='container'>
            <StyledUserBoard>
                <UserRow />
                <button onClick={() => localStorage.clear()}>
                    log out
                </button>
            </StyledUserBoard>
        </div>
    )
}

export default UserBoard