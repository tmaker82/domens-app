import React from "react";
import {Routes, Route} from 'react-router-dom'

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import "./App.css";
import TourComponent from "./Pages/TourComponent/TourComponent";
import ContactsComponent from "./Pages/ContactsComponent/ContactsComponent";
import FeedbackComponent from "./Pages/FeedbackComponent/FeedbackComponent";
import TeamComponent from "./Pages/TeamComponent/TeamComponent";
import ServicesComponent from "./Pages/ServicesComponent/ServicesComponent";
import FAQComponent from "./Pages/FAQComponent/FAQComponent";
import ActionsComponent from "./Pages/ActionsComponent/ActionsComponent";
import MainComponent from "./Pages/MainComponent/MainComponent";
import Navigation from "./Components/Navigation/NavIndex";
import FooterComponent from "./Components/Footer/FooterComponent";
import AboutComponent from "./Pages/AboutComponent/AboutComponent";

const App = () => {

    return (
        <div>
            <Navigation/>
            <Routes>
                <Route path="/" element={<MainComponent/>}/>
                <Route path="/actions" element={<ActionsComponent/>}/>
                <Route path="/about" element={<AboutComponent/>}/>
                <Route path="/faq" element={<FAQComponent/>}/>
                <Route path="/services" element={<ServicesComponent/>}/>
                <Route path="/team" element={<TeamComponent/>}/>
                <Route path="/feedback" element={<FeedbackComponent/>}/>
                <Route path="/contacts" element={<ContactsComponent/>}/>
                <Route path="/tour" element={<TourComponent/>}/>
            </Routes>
            <FooterComponent/>
        </div>
    );
}

export default App;
