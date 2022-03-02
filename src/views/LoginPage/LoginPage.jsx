import React, { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginPage.scss";
import LoginContainer from '../../containers/LoginContainer'


function LoginPage(props) {
  return (
    <div className="login-page">
      <div className="modal__login">
        <div
          className="modal active"
        >
          <div
            className="modal__content active"
            onClick={(e) => e.stopPropagation()}
          >
            <LoginContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
