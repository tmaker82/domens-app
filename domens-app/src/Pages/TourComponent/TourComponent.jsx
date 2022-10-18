import React from "react";

const TourComponent = (props) => {
  const {siteName} = props;
  console.log('siteName for Page: ', siteName);
  return (
      <div>Tour</div>
  );

};
export default TourComponent;
