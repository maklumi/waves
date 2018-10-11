import React, { Component } from "react";
import HomeSlider from "./HomeSlider";
import HomePromotion from "./HomePromotion";
import CardBlock from "../utils/CardBlock";

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
        <CardBlock
          list={this.props.products.bySell}
          title="Best Selling guitars"
        />
        <CardBlock list={this.props.products.byArrival} title="New Arrivals" />
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
