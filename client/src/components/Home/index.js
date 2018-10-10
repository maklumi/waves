import React, { Component } from "react";
import HomeSlider from "./HomeSlider";
import HomePromotion from "./HomePromotion";

import { connect } from "react-redux";
import {
  getProductBySell,
  getProductByArrival
} from "../../store/actions/product_actions";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getProductBySell()).then(response => {
      console.log(response);
    });
    this.props.dispatch(getProductByArrival());
  }

  render() {
    return (
      <div>
        <HomeSlider />
        <HomePromotion />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(Home);
