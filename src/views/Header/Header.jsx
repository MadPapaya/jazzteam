import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import "./Header.scss";
import { ReactComponent as SearchIcon } from "../../assets/icons/header/search.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/header/user.svg";
import { ReactComponent as LogoImg } from "../../assets/icons/logo/logo.svg";
import HeaderImg from "../../assets/img/header/header_active_img.jpg";
import { MenuData } from "./MenuData";
import LinkBtn from "../../components/LinkBtn";

let color = "#ffffff";
let style = "light";
let fillStyle = "#C7CEDB";

function Header() {
  let username = sessionStorage.getItem("username");
  const [state, setState] = useState({ isBurgerOpen: false });
  const handleBurgerBtnClick = () => {
    setState({ isBurgerOpen: !state.isBurgerOpen });
  };

  const history = useHistory();

  const onClickLogIn = () => {
    history.push("/login");
  };

  return (
    <div>
      <div
        className={`header ${
          state.isBurgerOpen ? "header--active-nav" : "hide"
        }`}
      >
        <div className="header__container">
          <Link to="/" className="header__logo">
            <LogoImg
              className="header__logo-img"
              style={{ fill: state.isBurgerOpen ? "#24292F" : fillStyle }}
            />
          </Link>
          <div className="header__right">
            <form className="search__form">
              <SearchIcon
                className="search__button"
                style={{ fill: state.isBurgerOpen ? "#161616" : color }}
              />
              <input
                type="text"
                placeholder="Поиск по сайту"
                className={`search__input ${style} ${
                  state.isBurgerOpen ? "search__input--active" : "hide"
                }`}
              />
            </form>

            <UserIcon
              className="user"
              onClick={onClickLogIn}
              style={{ stroke: state.isBurgerOpen ? "#161616" : color }}
            />
            <p>{username}</p>
            <button
              className={`burger ${style} ${
                state.isBurgerOpen ? "burger--active" : "hide"
              }`}
              onClick={handleBurgerBtnClick}
            >
              <span className={`burger__line ${style}`}></span>
            </button>
            {MenuData.length && (
              <nav className={`nav ${state.isBurgerOpen ? "active" : "hide"}`}>
                <ul className="nav__list">
                  {MenuData.map((item) => (
                    <li className="nav__item" key={item.label}>
                      <LinkBtn
                        to={item.url}
                        label={item.label}
                        onClick={handleBurgerBtnClick}
                      />
                    </li>
                  ))}
                </ul>
              </nav>
            )}
            <div className="header__img">
              <img src={HeaderImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
