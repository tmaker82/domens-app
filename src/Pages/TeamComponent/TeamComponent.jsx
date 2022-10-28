import React from "react";
import {Button} from "primereact";

const TeamComponent = () => {
  return (
      <div className="grid grid-nogutter surface-0 text-800">
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
          <section>
            <span className="block text-6xl font-bold mb-1">Руководитель</span>
            <div className="text-6xl text-primary font-bold mb-3">Замазкина Елена</div>
            <p className="mt-0 mb-4 text-700 line-height-3">TONUS-студия г.Новочебоксарск</p>
          </section>
        </div>
        <div className="col-12 md:col-6 overflow-hidden">
          <img src="https://cdn.bitrix24.ru/b8536431/landing/c29/c2960920f360962e82b7cc0b6580f19e/YSN_3772_2x.jpg" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
        </div>
      </div>
  );

};
export default TeamComponent;
