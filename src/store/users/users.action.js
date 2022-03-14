import * as types from '../types';
import {URL} from "../../apis/back";
import {editRequest} from "../../services/EditService";
import {useDispatch} from "react-redux";
export const getStaffList = () => {
    return function (dispatch) {
        return URL.get('v1/users/list/social_worker_trainer',
            {headers: {'authorization': `Bearer ${localStorage.getItem("token")}`}})
            .then(({data}) => {
                dispatch({
                    type: types.SET_SW_LIST,
                    staffList: data,
                });
            });
    };
};