import React from "react";
import {Routes, Route} from 'react-router-dom'

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import "./App.css";
import AtalMainPage from "./Pages/Atal/AtalMainPage";
import HeaderComponent from "./Components/Header/HeaderComponent";

const App = () => {

    return (
        <div>
           <HeaderComponent/>
            <Routes>
                <Route path="/" element={<AtalMainPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
