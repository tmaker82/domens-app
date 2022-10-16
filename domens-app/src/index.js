import React from "react";
import ReactDOM from "react-dom/client";

import {connect} from "react-redux";


import "./index.css";
import App from "./App";
import PerleMainPage from "./Pages/perle/PerleMainPage";
import AtalMainPage from "./Pages/atal/AtalMainPage";
import DefaultMainPage from "./Pages/default/DefaultMainPage";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);