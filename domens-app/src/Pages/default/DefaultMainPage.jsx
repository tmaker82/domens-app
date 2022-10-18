import React from "react";

import {getLocationName} from "../../Service/functions";
import DomenCardComponent from "../../Components/DomenCard/DomenCardComponent";

const DefaultMainPage = (props) => {
    let siteName = getLocationName();
    return (
        <div>
            <DomenCardComponent siteName={getLocationName()}></DomenCardComponent>
        </div>
    );
};

export default DefaultMainPage;
