import React from "react";
import {Routes, Route} from 'react-router-dom'

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "./App.css";
import DefaultMainPage from "./Pages/default/DefaultMainPage";
import AtalMainPage from "./Pages/atal/AtalMainPage";
import PerleMainPage from "./Pages/perle/PerleMainPage";
import BargraioniMainPage from "./Pages/bagrationi/BargraioniMainPage";
import YakutyanochkaMainPage from "./Pages/yakutyanochka/YakutyanochkaMainPage";
import Navigation from "./Components/Navigation/NavIndex";

const punycode = require("punycode");

const App = () => {
    const url = new URL(window.location.href.replace("#", ""));
    let location = url.hostname;
    let siteName = punycode.toUnicode(location);
    console.log("siteName = ", siteName);


    return (
        <div>
            <Navigation/>
            <main>
                <Routes>
                    <Route path="/" element={<DefaultMainPage />} />
                    <Route path="/perle" element={<PerleMainPage />} />
                    <Route path="/atal" element={<AtalMainPage />} />
                    <Route path="/bagrationi" element={<BargraioniMainPage />} />
                    <Route path="/yakutyanochka" element={<YakutyanochkaMainPage />} />
                </Routes>
            </main>

        </div>
    );
}

export default App;
