import React from "react";
import {Counter} from "../../Components/Counter/Counter";
import {connect} from "react-redux";
import CardComponent from "../../Components/CardComponent/CardComponent";
import FitnessTitleComponent from "../../Components/FitnessComponent";

const DefaultMainPage = () => {
    return (
        <div>
            DefaultMainPage
            <header className="App-header">
                <Counter/>
            </header>
            <FitnessTitleComponent></FitnessTitleComponent>
            <CardComponent></CardComponent>
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
export default connect(mapStateToProps)(DefaultMainPage);
