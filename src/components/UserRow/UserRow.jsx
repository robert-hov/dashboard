import {
    StyledUserBirthYear,
    StyledUserButton,
    StyledUserMail,
    StyledUserName,
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
                    <StyledUserBirthYear>Birth Date</StyledUserBirthYear>
                </StyledUserRow>
            ) : (
                <StyledUserRow>
                    <StyledUserName>{stuff && stuff?.firstName}</StyledUserName>
                    <StyledUserSurname>{stuff && stuff?.lastName}</StyledUserSurname>
                    <StyledUserMail>{stuff && stuff?.email}</StyledUserMail>
                    <StyledUserBirthYear>{stuff && stuff?.role}</StyledUserBirthYear>
                    <StyledUserButton onClick={() => click(stuff.id)}/>
                </StyledUserRow>
            )}
        </>
    )
}

export default UserRow