import React from "react";
import MyButton from "../utils/Button";

const RegisterLogin = () => {
  return (
    <div className="page_wrapper container register_login_container">
      <div className="left">
        <h2>New Customer</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          cumque optio veniam consecte
        </p>
        <MyButton
          type="default"
          title="Create an account"
          linkTo="/register"
          addStyles={{}}
        />
      </div>
      <div className="right">
        <h2>Registered Customer</h2>
        <p>If you have an account log in.</p>
      </div>
    </div>
  );
};

export default RegisterLogin;
