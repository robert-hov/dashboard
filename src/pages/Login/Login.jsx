import React, {useEffect, useState} from "react";
import StyledButton from "../../components/globalComponents/Button";
import colors from "../../utils/theme";
import StyledInput from "../../components/globalComponents/Input";
import {
    StyledForgotContainer,
    StyledForgotText,
    StyledLoginForm,
    StyledLoginPage,
    StyledLoginTitle,
    StyledRememberCheckbox,
    StyledRememberCheckboxContainer,
    StyledRememberCheckboxIcon,
    StyledRememberLabel,
    StyledRememberText
} from "./LoginStyle";
import {login} from "../../store/login/login.action";
import {useDispatch} from "react-redux";
import {Redirect, useHistory} from "react-router-dom";
import {URL} from "../../apis/back";

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const history = useHistory();

    const onFinish = (e) => {
        e.preventDefault();
        login(dispatch, {username: (username), password: (password)})
            .then(() => history.push('/dashboard'))
    }



    return (
        <StyledLoginPage>
            <StyledLoginForm onSubmit={onFinish}>
                <StyledLoginTitle>Welcome to DoBro !</StyledLoginTitle>
                <StyledInput
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                    bgColor={colors.primaryWhite}
                    color={colors.primaryBlack}
                    placeholder="Email"
                    iconColor={colors.primaryBlue}
                    border={colors.primaryGray}
                    type='text'
                    marginBottom="1.75rem"
                    whenFocus={colors.primaryBlue}
                >
                    <span className='img-container'>
                        <svg className="icon">
                          <use xlinkHref="#user"/>
                        </svg>
                    </span>
                </StyledInput>
                <StyledInput
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    bgColor={colors.primaryWhite}
                    color={colors.primaryBlack}
                    placeholder={"Password"}
                    iconColor={colors.primaryBlue}
                    border={colors.primaryGray}
                    type={'password'}
                    marginBottom="1.375rem"
                    whenFocus={colors.primaryBlue}
                >
                    <span className='img-container'>
                        <svg className="icon">
                          <use xlinkHref="#user"/>
                        </svg>
                    </span>
                </StyledInput>
                <StyledForgotContainer>
                    <StyledRememberLabel>
                        <StyledRememberCheckboxContainer>
                            <StyledRememberCheckbox/>
                            <StyledRememberCheckboxIcon>
                                <span className='img-container'>
                                    <svg className="icon">
                                      <use xlinkHref="#checkbox"></use>

                                    </svg>
                                </span>
                            </StyledRememberCheckboxIcon>
                        </StyledRememberCheckboxContainer>
                        <StyledRememberText>Remember me</StyledRememberText>
                    </StyledRememberLabel>
                    <StyledForgotText>Forgot your password?</StyledForgotText>
                </StyledForgotContainer>
                <StyledButton text={'Login'} color={colors.primaryWhite} bgColor={colors.primaryBlue}/>
            </StyledLoginForm>
        </StyledLoginPage>
    )
}

export default Login;