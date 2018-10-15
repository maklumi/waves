import React from "react";
import UserLayout from "../../hoc/User";
import UpdatePersonInfo from "./UpdatePersonInfo";

const UpdateProfile = () => {
  return (
    <UserLayout>
      <h1>Profile</h1>
      <UpdatePersonInfo />
    </UserLayout>
  );
};

export default UpdateProfile;
