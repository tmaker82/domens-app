import React from "react";
import {Button} from "primereact";
import {getLocationName} from "../../Service/functions";

const DomenCardComponent = (props) => {
    const siteName = getLocationName();
    console.log('DomenCardComponent siteName', siteName);
    const setButtonClick = () => {
                window.location.href = 'https://www.reg.ru/domain/shop/lot/атал.рф'
    }

    return (
        <div className="grid grid-nogutter surface-0 text-800">
            <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                <section>
                    <span className="block text-6xl font-bold mb-1">Доменное имя продается</span>
                    <div className="text-6xl text-primary font-bold mb-3">Атал.рф</div>
                    <p className="mt-0 mb-4 text-700 line-height-3">Вы можете приобрести доменное имя через торговую площадку REG.RU</p>
                    <Button label="Купить" type="button" className="mr-3 p-button-raised"  onClick={(e) => setButtonClick()} />
                </section>
            </div>

        </div>
    )
}


export default DomenCardComponent;



