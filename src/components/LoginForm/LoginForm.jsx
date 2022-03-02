import React, { useContext, useState } from "react";
import "./LoginForm.scss";
import "../../fonts/iconsfont.scss";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import Button from "../Button/Button";

class LoginForm extends React.Component {
  state = {
    redirectToPreviousRoute: false,
    username: "",
    password: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    this.props.logIn(
      {
        username,
        password,
      },
      () => {
        this.setState({ redirectToPreviousRoute: true });
      }
    );
  };

  handleChange = (e) => {
    const value = e.currentTarget.value;
    const fieldName = e.currentTarget.dataset.fieldName;

    this.setState((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  render() {
    const { location, errorMsg } = this.props;
    const { from } = location.state || { from: { pathname: "/" } };
    const { username, password, redirectToPreviousRoute } = this.state;

    if (redirectToPreviousRoute) {
      return <Redirect to="/profile" />;
    }

    return (
      <div className="login-page">
        <div className="modal__login">
          <div className="modal active">
            <div
              className="modal__content active"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="login-form">
                <form onSubmit={this.handleSubmit} className="login__form">
                  <input
                    data-field-name={"username"}
                    className="lr__form_input"
                    onChange={this.handleChange}
                    value={username}
                    type="text"
                    placeholder="Имя пользователя/e-mail"
                  />
                  <div className="lr__form_div">
                    <input
                      data-field-name={"password"}
                      className="lr__form_input"
                      onChange={this.handleChange}
                      value={password}
                      type="password"
                      placeholder="Пароль"
                    />
                    <span className="lr__form_forgot">Забыли?</span>
                  </div>
                  <div className="lr__form_checkbox">
                    <input type="checkbox" id="checkbox1" />
                    <label htmlFor="checkbox1">Запомнить меня</label>
                  </div>

                  {errorMsg && <p>{errorMsg}</p>}

                  <Button
                    type="submit"
                    className="lr__form_button"
                    text="Войти"
                  ></Button>
                </form>
                <span className="login__span">Или продолжить с помощью</span>
                <ul className="continue-with__list">
                  <li className="continue-with__item icon-google"></li>
                  <li className="continue-with__item icon-facebook"></li>
                  <li className="continue-with__item icon-vk"></li>
                  <li className="continue-with__item icon-twitter"></li>
                  <li className="continue-with__item icon-linkedin"></li>
                </ul>
                <span className="login__span">
                  У вас ещё нет аккаунта?{" "}
                  <span className="login__registration_btn">
                    Зарегистрироваться
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  logIn: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
};

export default LoginForm;
