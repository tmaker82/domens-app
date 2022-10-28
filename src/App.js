import React from "react";
import {Routes, Route} from 'react-router-dom'

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import "./App.css";
import YakutyanochkaMainPage from "./Pages/yakutyanochka/YakutyanochkaMainPage";
import Navigation from "./Components/Navigation/NavIndex";

const App = () => {

    return (
        <div>
           {/* <Navigation/>*/}
            <Routes>
                <Route path="/" element={<YakutyanochkaMainPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
