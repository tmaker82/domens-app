import React from "react";
import HeaderComponent from "../../Components/Header/HeaderComponent";
import MoneyComponent from "../../Components/Money/MoneyComponent";
import FooterComponent from "../../Components/Footer/FooterComponent";
import {Counter} from "../../Components/Counter/Counter";

const DefaultMainPage = () => {
  return (
    <div>
      DefaultMainPage
     {/* <HeaderComponent></HeaderComponent>
      <MoneyComponent></MoneyComponent>
      <FooterComponent></FooterComponent>*/}
        <header className="App-header">
            <Counter />
        </header>
    </div>
  );
};
export default DefaultMainPage;
