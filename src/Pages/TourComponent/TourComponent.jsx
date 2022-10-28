import React from "react";

const TourComponent = (props) => {
  const {siteName} = props;
  console.log('siteName for Page: ', siteName);
  return (
      <div className="grid">
        <div className="card">
          <div className="v0_34"></div>
          <div className="v0_35"></div>
          <div className="v0_36"></div>
          <div className="v0_37"></div>
          <div className="v0_38"></div>
          <div className="v0_39"></div>
          <div className="v0_40"></div>
          <span className="v0_41">Галерея</span>
          <div className="v0_42">
            <div className="v0_43"></div>
            <div className="v0_44"></div>
            <div className="v0_45"></div>
          </div>
          <span className="v0_46">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum issss has been the industry's standard dummy text ever since the 1500s.</span>
        </div>
      </div>
  );

};
export default TourComponent;
