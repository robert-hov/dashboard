import * as types from '../types'
const initialState = {
    users: null,
    staffList: []
};


const userReducer = (state = initialState, action) => {
    return {
        ...state,
        staffList: action.staffList,
    }
}

export default userReducer;