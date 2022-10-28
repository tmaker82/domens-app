import React from 'react';
import {NavLink} from "react-router-dom";
import {Button} from "primereact";

import './Navigation.css';
const Navigation = () => {

    return (
        <div className="grid">
            <div className="flex card-container blue-container overflow-hidden">
                <div
                    className="flex-none flex align-items-center justify-content-center font-bold text-white m-2 px-5 py-3 border-round">
                    <Button label={<NavLink to="/" className='Main_Navigation Menu_Main'>Главная</NavLink>} className="p-button-text p-button-secondary p-button-text"/>
                </div>
                <div
                    className="flex-none flex align-items-center justify-content-center font-bold text-white m-2 px-5 py-3 border-round">
                    <Button label={<NavLink to="/perle" className='Main_Navigation Menu_Perle'>Перле</NavLink>} className="p-button-text p-button-secondary p-button-text"/>
                </div>
                <div
                    className="flex-none flex align-items-center justify-content-center font-bold text-white m-2 px-5 py-3 border-round">
                    <Button label={<NavLink to="/atal" className='Main_Navigation Menu_Atal'>Атал</NavLink>} className="p-button-text p-button-secondary p-button-text"/>
                </div>
                <div
                    className="flex-none flex align-items-center justify-content-center font-bold text-white m-2 px-5 py-3 border-round">
                    <Button label={<NavLink to="/bagrationi" className='Main_Navigation Menu_Bagrationi'>Багратиони</NavLink>} className="p-button-text p-button-secondary p-button-text"/>
                </div>
                <div
                    className="flex-none flex align-items-center justify-content-center font-bold text-white m-2 px-5 py-3 border-round">
                    <Button label={<NavLink to="/yakutyanochka" className='Main_Navigation Menu_Yakutyanochka'>Якутяночка</NavLink>} className="p-button-text p-button-secondary p-button-text"/>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
