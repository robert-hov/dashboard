import request from './request'
import {URL} from '../apis/back'

class AuthService extends request {
    login({ username, password }) {
        return URL.post(
            `v1/oauth2/token`,
            `grant_type=password&username=${username}&password=${password}`,
            {headers: {
                "authorization": `Basic NXJxaDFkcXZrN3JmdDdpYjZlaDBhbHY1bXUydjRmOkpKdW00NldvV2NNeW5vVTFDV2xraEw=`,
                "content-type": 'application/x-www-form-urlencoded',
            }})
    }
}

export const loggedIn = () => localStorage.accessToken ? true : false


export default new AuthService();