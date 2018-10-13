import React, { Component } from "react";
import PageTop from "../utils/PageTop";

import ProdImg from "./ProdImg";
import ProdNfo from "./ProdNfo";

import { connect } from "react-redux";
import {
  getProductDetail,
  clearProductDetail
} from "../../store/actions/product_actions";

import { addToCart } from "../../store/actions/user_actions";

class ProductPage extends Component {
  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.props.dispatch(getProductDetail(id)).then(response => {
      if (!this.props.products.prodDetail) {
        this.props.history.push("/");
      }
    });
  };

  componentWillUnmount() {
    this.props.dispatch(clearProductDetail());
  }

  addToCartHandler(id) {
    this.props.dispatch(addToCart(id));
  }

  render() {
    return (
      <div>
        <PageTop title="Product detail" />
        <div className="container">
          {this.props.products.prodDetail ? (
            <div className="product_detail_wrapper">
              <div className="left">
                <div style={{ width: "500px" }}>
                  <ProdImg detail={this.props.products.prodDetail} />
                </div>
              </div>
              <div className="right">
                <ProdNfo
                  addToCart={id => this.addToCartHandler(id)}
                  detail={this.props.products.prodDetail}
                />
              </div>
            </div>
          ) : (
            "loading"
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(ProductPage);
