import React from "react";
import { Card } from "primereact";
import "./Header.css";

const HeaderComponent = () => {
  return (
      <div className="grid">
        <div class="col"></div>
        <div class="col"></div>
        <div class="col-3 col-offset-3">
          <i className="pi pi-phone"></i> +7 999-999-99-99</div>
      </div>
  );
};
export default HeaderComponent;
