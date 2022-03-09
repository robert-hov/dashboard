import {StyledUserBirthYear, StyledUserMail, StyledUserName, StyledUserRow, StyledUserSurname} from "./UserRowStyle";

const UserRow = () => {
    return (
        <>
            <StyledUserRow header={true}>
                <StyledUserName>Name</StyledUserName>
                <StyledUserSurname>Surname</StyledUserSurname>
                <StyledUserMail>Mail</StyledUserMail>
                <StyledUserBirthYear>Birth Date</StyledUserBirthYear>
            </StyledUserRow>
            <StyledUserRow>
                <StyledUserName>Name</StyledUserName>
                <StyledUserSurname>Surname</StyledUserSurname>
                <StyledUserMail>Mail</StyledUserMail>
                <StyledUserBirthYear>Birth Date</StyledUserBirthYear>
            </StyledUserRow>
        </>
    )
}

export default UserRow