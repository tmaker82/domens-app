import React from "react";

import {getLocationName} from "../../Service/functions";
import DomenCardComponent from "../../Components/DomenCard/DomenCardComponent";

const DefaultMainPage = () => {
    console.log('SITE NAME: ', getLocationName());
    return (
        <div>
            <DomenCardComponent></DomenCardComponent>
        </div>
    );
};

export default DefaultMainPage;
