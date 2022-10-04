import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "./App.css";
import MoneyComponent from "./Components/Money/MoneyComponent";
import FooterComponent from "./Components/Footer/FooterComponent";
import HeaderComponent from "./Components/Header/HeaderComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <MoneyComponent></MoneyComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
