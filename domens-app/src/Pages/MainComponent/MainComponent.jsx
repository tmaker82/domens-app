import React from "react";

const MainComponent = (props) => {
  const {siteName} = props;
  console.log('siteName for Page: ', siteName);
  return (
      <div>Main</div>
  );

};
export default MainComponent;
