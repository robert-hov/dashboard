import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalStyle from "./styles";
import {Provider} from "react-redux";
import store from "./store/configureReduxStore";


ReactDOM.render(
    <>
        <GlobalStyle/>
        <Provider store={store}>
            <App/>
        </Provider>
    </>

    , document.getElementById('root')
)

