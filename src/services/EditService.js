import {URL} from "../apis/back";

export const editRequest = ({firstName, lastName,}, id) => {
    console.log(firstName, lastName, id)
    return URL.put(
        `/v1/users/${id}`,
        {
            firstName: firstName,
            lastName: lastName,
        },
        {headers: {'authorization': `Bearer ${localStorage.getItem("token")}`}})
}