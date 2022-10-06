import React from "react";
import HeaderComponent from "../../Components/Header/HeaderComponent";
import MoneyComponent from "../../Components/Money/MoneyComponent";
import FooterComponent from "../../Components/Footer/FooterComponent";

const DefaultMainPage = () => {
  return (
    <div>
      DefaultMainPage
      <HeaderComponent></HeaderComponent>
      <MoneyComponent></MoneyComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
};
export default DefaultMainPage;
