import { NavLink } from "react-router-dom";
import logo from "../img/logo.svg";
import menuIcon1 from "../img/menu_icon1.svg";
import menuIcon2 from "../img/menu_icon2.svg";
import menuIcon3 from "../img/menu_icon3.svg";
import menuIcon4 from "../img/menu_icon4.svg";
import { ImMenu3, ImMenu4 } from "react-icons/im";

const Header = ({ toggleMenu, showMenu }) => {
  return (
    <div className="header">
      <div className="header-content">
      <div className="toggle-menu mobile-menu" onClick={toggleMenu}>
        <p className="mobile-menu">Menu</p>
        {showMenu ? (
          <ImMenu4 className="icon mobile-menu" />
        ) : (
          <ImMenu3 className="icon  mobile-menu" />
        )}
      </div>
      <div className="header-logo">
        <img src={logo} alt="logo" className="logo-img" />
      </div>
      <div className={`header-menu ${showMenu ? "show" : ""}`}>
        <ul className="menu">
          <li>
            <NavLink
              to="/GENESIS"
              className="item item1"
              activeClassName="active"
            >
              <img src={menuIcon1} alt="menuIcon1" />
              GENESIS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Aboutus"
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
      <div className="header-login">
        <button className="login-btn btn">LOGIN</button>
      </div>
    </div>
    </div>
  );
};

export default Header;
