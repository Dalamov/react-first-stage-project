import React, { useContext } from "react";
import { CryptoWebContext } from "../../../context/CryptoWeb/reducer";
import "./header.scss";

function Header() {
  const { user } = useContext(CryptoWebContext);

  return (
    <header>
      <div className="header__nav">
        <div className="header__nav__item">
          <i class="fas fa-bars"></i> Menu
        </div>
        <div className="header__nav__item">
          <i className="fas fa-search"></i> Search
        </div>
      </div>
      <div className="header__title">
        <h1>CryptoWeb</h1>
        <i className="fas fa-coins"></i>
      </div>
      <div className="header__media">
        <div className="header__media__item">
          <i className="fab fa-facebook-square"></i>
        </div>
        <div className="header__media__item">
          <i className="fab fa-instagram"></i>
        </div>
        <div className="header__media__item">
          <i className="fab fa-twitter-square"></i>
        </div>
      </div>
      <div className="header__userName">
        <div>{user.username}</div>
        <div className="header__nav__item">
          <i className="fas fa-sign-out-alt"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
