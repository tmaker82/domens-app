import React from 'react';
import {NavLink} from "react-router-dom";
import {Button} from "primereact";

import './Navigation.css';
const Navigation = () => {

    return (
        <div className="card">
            <div className="flex flex-wrap justify-content-center card-container gap-3">
                <div
                    className="w-8rem h-2rem text-white font-bold flex align-items-center justify-content-center"><NavLink to="/" >Главная</NavLink>
                </div>
                <div
                    className="w-8rem h-2rem text-white font-bold flex align-items-center justify-content-center"> <NavLink to="/perle" >Перле</NavLink>
                </div>
                <div
                    className="w-8rem h-2rem text-white font-bold flex align-items-center justify-content-center"><NavLink to="/atal" >Атал</NavLink>
                </div>
                <div
                    className="w-8rem h-2rem text-white font-bold flex align-items-center justify-content-center"><NavLink to="/bagrationi" >Багратиони</NavLink>
                </div>
                <div
                    className="w-8rem h-2rem text-white font-bold flex align-items-center justify-content-center">{<NavLink to="/yakutyanochka" >Якутяночка</NavLink>}
                </div>
            </div>
        </div>

    );
}

export default Navigation;
