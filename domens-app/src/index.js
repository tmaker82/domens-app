import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from "./redux/store/index";
import {connect} from "react-redux";


import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const mapStateToProps = (state) => {
    return {
        value: state.value,
        status: state.status,
        text: state.text
    }
}

const ConnectedApp = connect(
    mapStateToProps
)(App);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ConnectedApp/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
