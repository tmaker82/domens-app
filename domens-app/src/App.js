import React from "react";
import { Route, Routes } from "react-router-dom";

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

function App() {
  const url = new URL(window.location.href.replace("#", ""));
  let location = url.hostname;
  let siteName = punycode.toUnicode(location);
  console.log("siteName = ", siteName);


  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<DefaultMainPage/>} />
        <Route path="atal" element={<AtalMainPage siteName={siteName}/>} />
        <Route path="perle" element={<PerleMainPage siteName={siteName}/>} />
        <Route path="bagrationi" element={<BargraioniMainPage siteName={siteName}/>} />
        <Route path="yakutyanochka" element={<YakutyanochkaMainPage siteName={siteName}/>} />
      </Routes>
    </div>
  );
}

export default App;
