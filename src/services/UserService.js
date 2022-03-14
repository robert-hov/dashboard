import Request from "./request";
import {URL} from "../apis/back";

const UserService = () => {
    return URL.get(
        'v1/users/list/bms',
        {headers: {'authorization': `Bearer ${localStorage.getItem("token")}`}})
        .then(res => res)
}

export default UserService;