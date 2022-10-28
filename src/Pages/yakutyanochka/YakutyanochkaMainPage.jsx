import React from "react";
import DomenCardComponent from "../../Components/DomenCard/DomenCardComponent";

const YakutyanochkaMainPage = (props) => {
  const {siteName} = props;
  console.log('siteName for Page: ', siteName);
  return <DomenCardComponent></DomenCardComponent>;
};
export default YakutyanochkaMainPage;
