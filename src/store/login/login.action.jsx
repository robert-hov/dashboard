import {loginRequest} from "../../services/AuthService";

export const login = async (dispatch, form) => {
    const res = await loginRequest(form)
    const status = res.status;
    const data = res.data;
    if (status === 201) {
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("accessTokenExpiresAt", data.accessTokenExpiresAt);
    } else {
        return new Error("username or/and password is not correct");
    }
}