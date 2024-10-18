import React from "react";
import "../assets/css/app.css";
import logoMashina from "../assets/img/logo-mashina.svg";
import logoHouse from "../assets/img/logo-house.svg";
import { NavLink } from "react-router-dom";
import selectImg from "../assets/img/select-logo.svg";
import more from "../assets/img/bottom-more.svg";

const regions = [
  "Любой регион",
  "Алматы",
  "Астана",
  "Атырау",
  "Караганда",
  "Костанай",
  "Павлодар",
  "Петропавл",
  "Шымкент",
];

const Header = () => {
  const handleSelectClick = () => {
    document.getElementById("regions-select").focus(); // Программалык түрдө select элементин ачуу
  };

  return (
    <div className="header-block">
      <div className="container">
        <div className="header d-f-sb">
          <div className="logo-box">
            <img src={logoMashina} alt="1" />
            <div className="line-logo"></div>
            <img src={logoHouse} alt="2" />
          </div>
          <div style={{ display: "flex", gap: "7px" }}>
            <button className="login-btn">Войти</button>
            <button className="announcement-btn">Разместить объявление</button>
          </div>
        </div>
      </div>
      <div className="line-header-box d-f-center">
        <div className="container d-f-sb">
          <div className="page-box">
            <NavLink to="/" className="nav-link" exact>
              Срочно
            </NavLink>
            <NavLink
              to="/passenger"
              className="nav-link"
              activeClassName="active"
              exact
            >
              Легковые
            </NavLink>
            <NavLink
              to="/commercial"
              className="nav-link"
              activeClassName="active"
              exact
            >
              Коммерческие
            </NavLink>
            <NavLink
              to="/special-machinery"
              className="nav-link"
              activeClassName="active"
              exact
            >
              Спецтехники
            </NavLink>
            <NavLink
              to="/advertisers"
              className="nav-link"
              activeClassName="active"
              exact
            >
              Рекломодателям
            </NavLink>
          </div>
          <div className="select-container" onClick={handleSelectClick}>
            <img className="select-img" src={selectImg} alt="" />
            <select
              name="regions"
              id="regions-select"
              className="regions-select"
            >
              {regions.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </select>
            <img className="more-img" src={more} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
