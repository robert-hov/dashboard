import {
    StyledUserButton,
    StyledUserMail,
    StyledUserName, StyledUserRole,
    StyledUserRow,
    StyledUserSurname
} from "./UserRowStyle";

const UserRow = ({stuff, header, click}) => {


    return (
        <>
            {header  ? (
                <StyledUserRow>
                    <StyledUserName>Name</StyledUserName>
                    <StyledUserSurname>Surname</StyledUserSurname>
                    <StyledUserMail>Mail</StyledUserMail>
                    <StyledUserRole>Role</StyledUserRole>
                </StyledUserRow>
            ) : (
                <StyledUserRow>
                    <StyledUserName>{stuff && stuff?.firstName}</StyledUserName>
                    <StyledUserSurname>{stuff && stuff?.lastName}</StyledUserSurname>
                    <StyledUserMail>{stuff && stuff?.email}</StyledUserMail>
                    <StyledUserRole>{stuff && stuff?.role}</StyledUserRole>
                    <StyledUserButton onClick={() => click(stuff.id)}/>
                </StyledUserRow>
            )}
        </>
    )
}

export default UserRow