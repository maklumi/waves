import React, { Component } from "react";
import UserLayout from "../../hoc/User";
import MyButton from "../utils/Button";
import UserHistoryBlock from "../utils/User/HistoryBlock";

class UserDashboard extends Component {
  render() {
    const userData = this.props.user.userData;
    return (
      <UserLayout>
        <div>
          <div className="user_nfo_panel">
            <h1>User information</h1>
            <div>
              <span>{userData.name}</span>
              <span>{userData.lastname}</span>
              <span>{userData.email}</span>
            </div>
            <MyButton
              type="default"
              title="Edit account info"
              linkTo="/user/user_profile"
            />
          </div>

          {userData.history ? (
            <div className="user_nfo_panel">
              <h1>Purchase history</h1>
              <div className="user_product_block_wrapper">
                <UserHistoryBlock products={userData.history} />
              </div>
            </div>
          ) : null}
        </div>
      </UserLayout>
    );
  }
}

export default UserDashboard;
