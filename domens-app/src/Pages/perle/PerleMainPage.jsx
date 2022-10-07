import React from "react";
import {connect} from "react-redux";
import {store} from "../../redux/store";

const PerleMainPage = (props) => {

  const {siteName} = props;
  console.log('siteName for Page: ', siteName);
  console.log('props: ', props);
  console.log('getState: ', store.getState());

  return <div>
    <div>PerleMainPage</div>
    <div></div>
  </div>;
};

const mapStateToProps = (state) => {
  return {
    value: state.value,
    status: state.status,
    text: state.text
  }
}

export default connect(mapStateToProps)(PerleMainPage);
