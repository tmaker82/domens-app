import React from 'react';
import {NavLink} from "react-router-dom";

import './Navigation.css';
const Navigation = () => {

    return (
        <div className="card">
            <div className="flex flex-wrap justify-content-center card-container gap-3">
                <div
                    className="w-8rem h-4rem text-white font-bold flex align-items-center justify-content-center"><NavLink to="/" >Главная</NavLink>
                </div>
                <div
                    className="w-8rem h-4rem text-white font-bold flex align-items-center justify-content-center"> <NavLink to="/actions" >Акции</NavLink>
                </div>
                <div
                    className="w-8rem h-4rem text-white font-bold flex align-items-center justify-content-center"><NavLink to="/about" >О нас</NavLink>
                </div>
                <div
                    className="w-8rem h-4rem text-white font-bold flex align-items-center justify-content-center"><NavLink to="/faq" >FAQ</NavLink>
                </div>
                <div
                    className="w-8rem h-4rem text-white font-bold flex align-items-center justify-content-center">{<NavLink to="/services" >Услуги</NavLink>}
                </div>
                <div
                    className="w-8rem h-4rem text-white font-bold flex align-items-center justify-content-center">{<NavLink to="/team" >Команда</NavLink>}
                </div>
                <div
                    className="w-8rem h-4rem text-white font-bold flex align-items-center justify-content-center">{<NavLink to="/feedback" >Отзывы</NavLink>}
                </div>
                <div
                    className="w-8rem h-4rem text-white font-bold flex align-items-center justify-content-center">{<NavLink to="/contacts" >Контакты</NavLink>}
                </div>
                <div
                    className="w-8rem h-4rem text-white font-bold flex align-items-center justify-content-center">{<NavLink to="/tour" >Экскурсия</NavLink>}
                </div>
            </div>
        </div>

    );
}

export default Navigation;
