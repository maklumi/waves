import React, { Component } from "react";
import PageTop from "../utils/PageTop";

import { connect } from "react-redux";
import { getBrands, getWoods } from "../../store/actions/product_actions";
import { frets, price } from "../utils/Form/fixed_categories";

import CollapseCheckBox from "../utils/CollapseCheckBox";
import CollapseRadio from "../utils/CollapseRadio";

class Shop extends Component {
  state = {
    grid: "",
    limit: 6,
    skip: 0,
    filters: {
      brands: [],
      frets: [],
      woods: [],
      price: []
    }
  };

  componentDidMount = () => {
    this.props.dispatch(getBrands());
    this.props.dispatch(getWoods());
  };

  handlePrice = value => {
    const data = price;
    let array = [];
    for (let key in data) {
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }
    return array;
  };

  handleFilters = (filters, category) => {
    const newFilters = { ...this.state.filters };
    newFilters[category] = filters;

    if (category === "price") {
      let priceValue = this.handlePrice(filters);
      newFilters[category] = priceValue;
    }

    this.setState({ filters: newFilters });
  };

  render() {
    const products = this.props.products;
    return (
      <div>
        <PageTop title="Browse Products" />
        <div className="container">
          <div className="shop_wrapper">
            <div className="left">
              <CollapseCheckBox
                initState={true}
                title="Brands"
                list={products.brands}
                handleFilters={filters => this.handleFilters(filters, "brands")}
              />
              <CollapseCheckBox
                initState={false}
                title="Frets"
                list={frets}
                handleFilters={filters => this.handleFilters(filters, "frets")}
              />
              <CollapseCheckBox
                initState={true}
                title="Woods"
                list={products.woods}
                handleFilters={filters => this.handleFilters(filters, "woods")}
              />
              <CollapseRadio
                initState={true}
                title="Price"
                list={price}
                handleFilters={filters => this.handleFilters(filters, "price")}
              />
            </div>
            <div className="right">right</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(Shop);
