import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import menuIcon1 from "../../assets/images/menu_icon1.svg";
import menuIcon2 from "../../assets/images/menu_icon2.svg";
import menuIcon3 from "../../assets/images/menu_icon3.svg";
import menuIcon4 from "../../assets/images/menu_icon4.svg";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { useState } from "react";
import Logo1 from "../svgComponent/Logo";
import "./styles.scss";
//import styles from "../styles/App.module.scss";

const Header = ({ toggleMenu, showMenu, styles,handleLoginBtn , loginBtn}) => {

  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <button className={styles.mobileMenuBtn}>
          <div
            className={`${styles.dots} ${showMenu ? styles.active : ""}`}
            onClick={toggleMenu}
          >
            <span className={`${styles.mDot} ${styles.dot1}`}></span>
            <span className={`${styles.mDot} ${styles.dot2}`}></span>
            <span className={`${styles.mDot} ${styles.dot3}`}></span>
          </div>
        </button>
        <div className={styles.headerLogo}>
          <img
            src={logo}
            alt="logo"
            className={styles.logoImg}
            width={109}
            height={41}
          />
          {/* <Logo1 className="logo-img"/> */}
        </div>
        {!loginBtn ? (
          <div
            className={`${styles.headerMenu} ${showMenu ? styles.show : ""}`}
          >
            <ul className={styles.menu}>
              <li>
                <NavLink
                  to="/genesis"
                  className={`${styles.item} ${styles.item1} item1 item`}
                  activeclassname={styles.active}
                >
                  <img src={menuIcon1} alt="menuIcon1" />
                  GENESIS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutus"
                  className={`${styles.item} ${styles.item2} item2 item`}
                  activeclassname={styles.active}
                >
                  <img src={menuIcon2} alt="menuIcon2" />
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/insignia"
                  className={`${styles.item} ${styles.item3} item3 item`}
                  activeclassname={styles.active}
                >
                  <img src={menuIcon3} alt="menuIcon3" />
                  insignia NFT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/lyatoken"
                  className={`${styles.item} ${styles.item4} item4 item`}
                  activeclassname={styles.active}
                >
                  <img src={menuIcon4} alt="menuIcon4" />
                  LYA TOKEN
                </NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <div
            className={`${styles.headerMenu} ${showMenu ? styles.show : ""}`}
          >
            <ul className={styles.menu}>
              <li>
                <NavLink
                  to="/mint"
                  className={`${styles.item} ${styles.item1} item1 item`}
                  activeclassname={styles.active}
                >
                  Mint
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={`${styles.item} ${styles.item3} item3 item`}
                  activeclassname={styles.active}
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        <div className={styles.headerLogin}>
          {!loginBtn ? (
            <Link to={'./dashboard'}>
            <button
              className={`${styles.loginBtn} ${styles.btn}`}
              onClick={handleLoginBtn}
            >
              LOGIN
            </button>
            </Link>
          ) : (
            <button
              className={`${styles.connectWallet} ${styles.btn}`}
              onClick={handleLoginBtn}
            >
              connect wallet
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
