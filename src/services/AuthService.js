import request from './request'
import {URL} from '../apis/back'

export const loginRequest = ({ username, password }) => {
    return URL.post(
        `v1/oauth2/token`,
        `grant_type=password&username=${username}&password=${password}`,
        {headers: {
                "authorization": `Basic NXJxaDFkcXZrN3JmdDdpYjZlaDBhbHY1bXUydjRmOkpKdW00NldvV2NNeW5vVTFDV2xraEw=`,
                "content-type": 'application/x-www-form-urlencoded',
            }})
}