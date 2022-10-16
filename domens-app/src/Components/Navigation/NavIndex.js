import React from 'react';
import {NavLink} from "react-router-dom";
import "./Navigation.css"
const Navigation = () => {

    return (
        <div className='Main_Navigation'>
                <NavLink to="/" className='Main_Navigation Menu_Main'>Main</NavLink>
                <NavLink to="/perle" className='Main_Navigation Menu_Perle'>Перле</NavLink>
                <NavLink to="/atal" className='Main_Navigation Menu_Atal'>Атал</NavLink>
                <NavLink to="/bagrationi" className='Main_Navigation Menu_Bagrationi'>Багратиони</NavLink>
                <NavLink to="/yakutyanochka" className='Main_Navigation Menu_Yakutyanochka'>Якутяночка</NavLink>
        </div>
    );
}

export default Navigation;
