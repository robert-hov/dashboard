import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import { createBrowserHistory } from "history";


export const history = createBrowserHistory({
    basename: "",
    forceRefresh: false,
    keyLength: 6,
    getUserConfirmation: (message, callback) =>
        callback(window.confirm(message)),
});

const customMiddleware = (store) => (next) => (action) => {
    next(action);
    if(action.type.startsWith('user/')) {
        localStorage.setItem('user', store.getState().user)
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let array_middleware = [thunk];

const getCompose = () => {
    if (process.env.NODE_ENV !== "production") {
        return composeEnhancers(applyMiddleware(...array_middleware, customMiddleware));
    } else {
        return applyMiddleware(...array_middleware, customMiddleware);
    }
};

const initialState = {}

const store = createStore(rootReducer, initialState, getCompose());
window.ReduxDispatch = store.dispatch;

export default store