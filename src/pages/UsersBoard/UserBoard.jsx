import React, {useEffect, useState} from "react";
import {StyledUserBoard} from "./UserBoardStyle";
import UserRow from "../../components/UserRow/UserRow";
import {useHistory} from "react-router-dom";
import userReducer from "../../store/users/user.reducer";
import {getStaffList} from "../../store/users/users.action";
import {useDispatch, useSelector} from "react-redux";
import {URL} from "../../apis/back";
import EditPopup from "../../components/EditPopup/EditPopup";

const UserBoard = () => {
    // const id = '';
    const dispatch = useDispatch();
    const history = useHistory();
    const [activeId, setActiveId] = useState('');
    const [activePopup, setActivePopup] = useState(false);
    const {staffList} = useSelector(s => s.userReducer)
    useEffect(() => {
        dispatch(getStaffList())
    }, [])
    console.log(activeId)

    const clickHandler = (id) => {
        setActiveId(id)
        setActivePopup(true);
    }

    const cancelClickHandler = () => {
        setActivePopup(false)
    }


    return (
        <div className='container'>
            <StyledUserBoard>
                <UserRow header/>
                {staffList &&
                staffList.map((elem) => {
                    return <UserRow key={elem.id} click={clickHandler} stuff={elem && elem}/>
                })}
                <button onClick={() => {
                    history.push('/login')
                    localStorage.clear()
                }}>
                    log out
                </button>
                <button onClick={() => {
                    console.log(staffList)
                }}>
                    get users
                </button>
            </StyledUserBoard>
            {activePopup && (
                <EditPopup cancelClick={cancelClickHandler} active={activeId}/>
            )}
        </div>
    )
}

export default UserBoard