import React, { Component } from "react";
import UserLayout from "../../hoc/User";

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

  render() {
    return <UserLayout>Cart</UserLayout>;
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Cart);
