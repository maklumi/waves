import React, { Component } from "react";
import UserLayout from "../../hoc/User";
import MyButton from "../utils/Button";

class UserDashboard extends Component {
  render() {
    return (
      <UserLayout>
        <div>
          <div className="user_nfo_panel">
            <h1>User information</h1>
            <div>
              <span>name</span>
              <span>lastname</span>
              <span>email</span>
            </div>
            <MyButton
              type="default"
              title="Edit account info"
              linkTo="/user/user_profile"
            />
          </div>

          <div className="user_nfo_panel">
            <h1>Purchase history</h1>
            <div className="user_product_block_wrapper">history</div>
          </div>
        </div>
      </UserLayout>
    );
  }
}

export default UserDashboard;
