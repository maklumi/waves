import React, { Component } from "react";
import UserLayout from "../../hoc/User";
import ProductBlock from "../utils/User/ProductBlock";

import { connect } from "react-redux";

import { getCartItems } from "../../store/actions/user_actions";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faFrown, faSmile } from "@fortawesome/fontawesome-free-solid";

class Cart extends Component {
  state = {
    loading: true,
    total: 0,
    showTotal: false,
    showSuccess: false
  };

  componentDidMount = () => {
    let cartItem = [];
    let user = this.props.user;

    if (user.userData.cart) {
      if (user.userData.cart.length > 0) {
        user.userData.cart.forEach(item => {
          cartItem.push(item.id);
        });

        this.props
          .dispatch(getCartItems(cartItem, user.userData.cart))
          .then(a => {
            console.log(a);
          });
      }
    }
  };

  removeFromCart = id => {};
  render() {
    return (
      <UserLayout>
        <div>
          <h1>My cart</h1>
          <div className="user_cart">
            <ProductBlock
              products={this.props.user}
              type="cart"
              removeItem={id => this.removeFromCart(id)}
            />
          </div>
        </div>
      </UserLayout>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Cart);
