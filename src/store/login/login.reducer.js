const initialState = {
    user: localStorage.user ? JSON.parse(localStorage.getItem("user")) : null
};

const userReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
};

export default userReducer;