import * as types from '../types'
const initialState = {
    users: null,
    staffList: []
};


const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SET_SW_LIST:
            return {
                ...state,
                staffList: action.staffList,
            }
        default: return state
    }

}

export default userReducer;