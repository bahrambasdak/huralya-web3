import { NavLink } from "react-router-dom";
import logo from "../img/logo.svg";
import menuIcon1 from "../img/menu_icon1.svg";
import menuIcon2 from "../img/menu_icon2.svg";
import menuIcon3 from "../img/menu_icon3.svg";
import menuIcon4 from "../img/menu_icon4.svg";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { useState } from "react";
import Logo1 from "./svgComponent/Logo";

const Header = ({ toggleMenu, showMenu }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn((prev) => !prev);
  };
  return (
    <div className="header">
      <div className="header-content">
        <button className="mobile-menu-btn">
          <div
            className={`dots ${showMenu ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="m-dot dot1"></span>
            <span className="m-dot dot2"></span>
            <span className="m-dot dot3"></span>
          </div>
        </button>
        <div className="header-logo">
          <img
            src={logo}
            alt="logo"
            className="logo-img"
            width={109}
            height={41}
          />
          {/* <Logo1 className="logo-img"/> */}
        </div>
        {!loggedIn ? (
          <div className={`header-menu ${showMenu ? "show" : ""}`}>
            <ul className="menu">
              <li>
                <NavLink
                  to="/genesis"
                  className="item item1"
                  activeClassName="active"
                >
                  <img src={menuIcon1} alt="menuIcon1" />
                  GENESIS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutus"
                  className="item item2"
                  activeClassName="active"
                >
                  <img src={menuIcon2} alt="menuIcon2" />
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/insignia"
                  className="item item3"
                  activeClassName="active"
                >
                  <img src={menuIcon3} alt="menuIcon3" />
                  insignia NFT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/lyatoken"
                  className="item item4"
                  activeClassName="active"
                >
                  <img src={menuIcon4} alt="menuIcon4" />
                  LYA TOKEN
                </NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <div className={`header-menu ${showMenu ? "show" : ""}`}>
            <ul className="menu">
              <li>
                <NavLink
                  to="/mint"
                  className="item item1"
                  activeClassName="active"
                >
                  Mint
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className="item item3"
                  activeClassName="active"
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        <div className="header-login">
          <button className="login-btn btn" onClick={handleLogin}>
           {loggedIn ? 'LOGOUT' : 'LOGIN'} 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
