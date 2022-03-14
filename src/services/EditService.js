import {URL} from "../apis/back";

export const editRequest = ({firstName, lastName, email,}, id) => {
    console.log(id)
    return URL.put(
        `/v1/users/${id}`,
        {
            firstName: firstName,
            lastName: lastName,
            email: email
        },
        {headers: {'authorization': `Bearer ${localStorage.getItem("token")}`}})
}