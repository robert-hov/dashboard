import {
    StyledEditForm, StyledEditFormRow,
    StyledEditLabel, StyledEditLabelText,
    StyledEditPopup, StyledEditPopupBtn,
    StyledEditPopupHeader, StyledInputsContainer,
    StyledPopupWrapper
} from "./EditPopupStyles";
import StyledInput from "../globalComponents/Input";
import colors from "../../utils/theme";
import {useState} from "react";
import {editStaffList, getStaffList} from "../../store/users/users.action";
import {useDispatch} from "react-redux";
import {editRequest} from "../../services/EditService";

const EditPopup = ({cancelClick, active}) => {
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [mail, setMail] = useState('');
    const dispatch = useDispatch();

    const onFinish = (e) => {
        e.preventDefault();
        editRequest({firstName: (firstName), lastName: (surname)}, active)
        dispatch(getStaffList(dispatch))
        cancelClick();
    }

    return (
        <StyledPopupWrapper onClick={cancelClick}>
            <StyledEditPopup onClick={(e) => e.stopPropagation()}>
                <StyledEditPopupHeader>Edit Personal Information</StyledEditPopupHeader>
                <StyledEditForm onSubmit={onFinish}>
                    <StyledInputsContainer>
                        <StyledEditFormRow justifyContent="space-between">
                            <StyledEditLabel labelCount="2">
                                <StyledEditLabelText>
                                    <StyledEditLabelText importantColor>
                                        *
                                    </StyledEditLabelText>
                                    First Name
                                </StyledEditLabelText>
                                <StyledInput
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}
                                    bgColor={colors.primaryWhite}
                                    color={colors.primaryBlack}
                                    placeholder={"First Name"}
                                    border={colors.primaryGray}
                                    type={'text'}
                                    marginBottom="1.375rem"
                                    whenFocus={colors.primaryBlue}
                                    required
                                />
                            </StyledEditLabel>
                            <StyledEditLabel labelCount="2">
                                <StyledEditLabelText>
                                    <StyledEditLabelText importantColor>
                                        *
                                    </StyledEditLabelText>
                                    Last Name
                                </StyledEditLabelText>
                                <StyledInput
                                    value={surname}
                                    onChange={e => setSurname(e.target.value)}
                                    bgColor={colors.primaryWhite}
                                    color={colors.primaryBlack}
                                    placeholder={"Last Name"}
                                    border={colors.primaryGray}
                                    type={'text'}
                                    marginBottom="1.375rem"
                                    whenFocus={colors.primaryBlue}
                                    required
                                />
                            </StyledEditLabel>
                        </StyledEditFormRow>
                        <StyledEditFormRow justifyContent="flex-end">
                            <StyledEditPopupBtn onClick={cancelClick}>Cancel</StyledEditPopupBtn>
                            <StyledEditPopupBtn
                                type={'submit'}
                                save
                            >
                                save
                            </StyledEditPopupBtn>
                        </StyledEditFormRow>
                    </StyledInputsContainer>
                </StyledEditForm>
            </StyledEditPopup>
        </StyledPopupWrapper>
    )
}

export default EditPopup;