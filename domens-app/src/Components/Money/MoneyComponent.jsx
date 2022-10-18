import React from "react";
import { Card } from "primereact";

const MoneyComponent = () => {
  return (
    <Card
      title="БАГРАТИОНИ.РФ"
      style={{
        marginBottom: "auto",
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <p className="m-0" style={{ lineHeight: "1.5" }}>
        Сайт находится в разработке
      </p>

      <p className="m-0" style={{ lineHeight: "1.5" }}>
        Помочь проекту
      </p>
      <p>
        <iframe
          src="https://yoomoney.ru/quickpay/button-widget?targets=%D0%9F%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%20%D0%B2%20%D1%80%D0%B0%D0%B7%D0%B2%D0%B8%D1%82%D0%B8%D0%B8%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0&default-sum=100&button-text=11&any-card-payment-type=on&button-size=m&button-color=orange&successURL=&quickpay=small&account=410014297519598&"
          width="184"
          height="36"
          frameBorder="0"
          allowTransparency="true"
          scrolling="no"
        ></iframe>
      </p>
    </Card>
  );
};

export default MoneyComponent;
