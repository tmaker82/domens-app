import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "./App.css";
import MoneyComponent from "./Components/Money/MoneyComponent";
import FooterComponent from "./Components/Footer/FooterComponent";
import HeaderComponent from "./Components/Header/HeaderComponent";
const punycode = require("punycode");

function App() {
  console.log(punycode.toUnicode("xn--e1aarog.xn--p1ai"));

  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <MoneyComponent></MoneyComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
