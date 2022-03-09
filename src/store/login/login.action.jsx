import AuthService from "../../services/AuthService";
import UserService from "../../services/UserService";

export const login = (dispatch, form) => {
    AuthService.login(form).then(({status, data}) => {
        if (AuthService.isOkStatus(status)) {
            localStorage.setItem("token", data.accessToken);
            localStorage.setItem(
                "accessTokenExpiresAt",
                data.accessTokenExpiresAt
            );
            getUser(dispatch);
        } else {
            return new Error("username or/and password is not correct");
        }
    })
}

export const getUser = (dispatch) => {
    UserService.getCurrentUser().then((res) => {
        const {status, json} = res;

        if (UserService.isOkStatus(status)) {
            localStorage.setItem("user", JSON.stringify(json));
            dispatch({
                type: "SET_USER",
                user: json,
            });
        }
    });
};