import React from "react";
import {Button, Card} from "primereact";
import "./Header.css";

const HeaderComponent = () => {
    const setButtonClick = () => {
        window.location.href = 'https://www.reg.ru/domain/shop/lot/атал.рф'
    }

    return (
        <div className="grid pt-2 surface-800 text-200">
            <div className="col-6">
            </div>
            <div className="col-4 text-lg pt-3">
                Доменное имя продается
            </div>
            <div className="col-2">
                <Button label="Купить" type="button" className="mr-3 p-button-raised"
                        onClick={(e) => setButtonClick()}/>
            </div>
        </div>

    )
};
export default HeaderComponent;
