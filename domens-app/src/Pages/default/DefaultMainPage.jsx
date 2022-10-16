import React from "react";
import {Counter} from "../../Components/Counter/Counter";
import CardComponent from "../../Components/CardComponent/CardComponent";
import FitnessTitleComponent from "../../Components/FitnessComponent";
import Navigation from "../../Components/Navigation/NavIndex";

const DefaultMainPage = () => {
    return (
        <div>
            DefaultMainPage
            {/*<header className="App-header">
                <Counter/>
            </header>*/}
            <FitnessTitleComponent></FitnessTitleComponent>
{/*
            <CardComponent></CardComponent>
*/}
        </div>
    );
};

const mapStateToProps = function (state) {
    return {
        value: state.value,
        status: state.status,
        text: state.text
    }
}
export default DefaultMainPage;
