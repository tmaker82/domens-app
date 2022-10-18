import React from "react";
import {Routes, Route} from 'react-router-dom'

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import "./App.css";
import DefaultMainPage from "./Pages/default/DefaultMainPage";
import AtalMainPage from "./Pages/atal/AtalMainPage";
import PerleMainPage from "./Pages/perle/PerleMainPage";
import BargraioniMainPage from "./Pages/bagrationi/BargraioniMainPage";
import YakutyanochkaMainPage from "./Pages/yakutyanochka/YakutyanochkaMainPage";
import Navigation from "./Components/Navigation/NavIndex";
import FooterComponent from "./Components/Footer/FooterComponent";

const App = () => {

    return (
        <div>
            <Navigation/>
            <Routes>
                <Route path="/" element={<DefaultMainPage/>}/>
                <Route path="/perle" element={<PerleMainPage/>}/>
                <Route path="/atal" element={<AtalMainPage/>}/>
                <Route path="/bagrationi" element={<BargraioniMainPage/>}/>
                <Route path="/yakutyanochka" element={<YakutyanochkaMainPage/>}/>
            </Routes>
            <FooterComponent/>
        </div>
    );
}

export default App;
