import React from "react";
import {Card} from "primereact";

const AboutComponent = (props) => {
    const {siteName} = props;
    console.log('siteName for Page: ', siteName);
    return (

        <div className="surface-0 text-center">
            <div className="mb-3 font-bold text-2xl">
                <span className="text-900">ПОЧЕМУ СТОИТ ПОСЕТИТЬ </span>
                <span className="text-green-600">TONUS-СТУДИЮ</span>
            </div>
            <div className="text-700 text-sm mb-6">Ac turpis egestas maecenas pharetra convallis posuere morbi leo
                urna.
            </div>
            <div className="grid">
                <div className="col-12 md:col-3 mb-3 px-5">
                    <Card>
                <span className="p-3 shadow-2 mb-3 inline-block" style={{borderRadius: '10px'}}>
                    <i className="pi pi-thumbs-up text-4xl text-blue-500"></i>
                </span>

                    <div className="text-900 mb-3 font-medium">ИЗБАВЛЕНИЕ ОТ ЛИШНЕГО ВЕСА И ЦЕЛЛЮЛИТА</div>

                    {/*<span className="text-700 text-sm line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>*/}
                    </Card>
                </div>
                <div className="col-12 md:col-3 mb-4 px-5">
                <Card>
            <span className="p-3 shadow-2 mb-3 inline-block" style={{borderRadius: '10px'}}>
                <i className="pi pi-sun text-4xl text-blue-500"></i>
            </span>
                    <div className="text-900 mb-3 font-medium">РАССЛАБЛЕНИЕ И СНЯТИЕ СТРЕССА</div>
                    {/*<span className="text-700 text-sm line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</span>*/}
                </Card>
                </div>
                <div className="col-12 md:col-3 mb-4 px-5">
                <Card>
            <span className="p-3 shadow-2 mb-3 inline-block" style={{borderRadius: '10px'}}>
                <i className="pi pi-heart text-4xl text-blue-500"></i>
            </span>
                    <div className="text-900 mb-3 font-medium">СОХРАНЕНИЕ МОЛОДОСТИ И ТОНУСА</div>
                    {/*<span className="text-700 text-sm line-height-3">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</span>*/}
                </Card>
                </div>
                <div className="col-12 md:col-3 mb-4 px-5">
                <Card>
            <span className="p-3 shadow-2 mb-3 inline-block" style={{borderRadius: '10px'}}>
                <i className="pi pi-user-plus text-4xl text-blue-500"></i>
            </span>
                    <div className="text-900 mb-3 font-medium">ВОССТАНОВЛЕНИЕ ПОСЛЕ РОДОВ</div>
                    {/*<span className="text-700 text-sm line-height-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>*/}
                </Card>
                </div>
            </div>
        </div>

    );
};
export default AboutComponent;
