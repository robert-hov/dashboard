import * as types from '../types';
import {URL} from "../../apis/back";
import {editRequest} from "../../services/EditService";

export const getStaffList = () => {
    return function (dispatch) {
        return URL.get('v1/users/list/bms',
            {headers: {'authorization': `Bearer ${localStorage.getItem("token")}`}})
            .then(({data}) => {
                dispatch({
                    type: types.SET_SW_LIST,
                    staffList: data,
                });
            });
    };
};

export const editStaffList = (dispatch, form, id) => {
    return function (dispatch) {
        return URL.put(`v1/users/${id}`,
            {headers: {'authorization': `Bearer ${localStorage.getItem("token")}`}}).then(({data}) => {
            console.log(data)
                dispatch({
                    type: types.EDIT_SW_LIST,
                    staffList: data,
                });
            });
    };
};