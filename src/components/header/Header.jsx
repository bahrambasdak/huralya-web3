import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import menuIcon1 from '../../assets/images/menu_icon1.svg';
import menuIcon2 from '../../assets/images/menu_icon2.svg';
import menuIcon3 from '../../assets/images/menu_icon3.svg';
import menuIcon4 from '../../assets/images/menu_icon4.svg';
import { ImMenu3, ImMenu4 } from 'react-icons/im';
import { useState } from 'react';
import Logo1 from '../svgComponent/Logo';
import ConnecttBtn from '../connectWalletBtn';
import { useAuth } from '../../contexts/Auth';
import HeaderBg from '../svgComponent/HeaderBg';

const Header = ({
  toggleMenu,
  showMenu,
  styles,
  handleLoginBtn,
  loginBtn,
  showMainFooter,
  handleMenuClick,
  headerMenuActive
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerBg}><HeaderBg/></div>
        <button className={styles.mobileMenuBtn}>
          <div
            className={`${styles.dots} ${showMenu ? styles.active : ''}`}
            onClick={toggleMenu}>
            <span className={`${styles.mDot} ${styles.dot1}`}></span>
            <span className={`${styles.mDot} ${styles.dot2}`}></span>
            <span className={`${styles.mDot} ${styles.dot3}`}></span>
          </div>
        </button>
        <div className={styles.headerLogo}>
          <Link to={'./huralya'}>
            <img
              src={logo}
              alt="logo"
              className={styles.logoImg}
              width={109}
              height={41}
              onClick={handleLoginBtn}
            />
          </Link>
        </div>
        {!loginBtn ? (
          <div
            className={`${styles.headerMenu} ${showMenu ? styles.show : ''}`}>
            <ul className={styles.menu}>
              <li>
                <a
                  href="#genesis"
                  className={`${styles.item} ${styles.item1} ${
                    headerMenuActive.genesis && styles.active
                  }`}
                  onClick={() => handleMenuClick('genesis')}>
                  <img src={menuIcon1} alt="menuIcon1" />
                  GENESIS
                </a>
              </li>
              <li>
                <a
                  href="#aboutus"
                  className={`${styles.item} ${styles.item2} ${
                    headerMenuActive.aboutus && styles.active
                  }`}
                  onClick={() => handleMenuClick('aboutus')}>
                  <img src={menuIcon2} alt="menuIcon2" />
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#insignia"
                  className={`${styles.item} ${styles.item3} ${
                    headerMenuActive.insignia && styles.active
                  }`}
                  onClick={() => handleMenuClick('insignia')}>
                  <img src={menuIcon3} alt="menuIcon3" />
                  insignia NFT
                </a>
              </li>
              <li>
                <a
                  href="#lyatoken"
                  className={`${styles.item} ${styles.item4} ${
                    headerMenuActive.lyatoken && styles.active
                  }`}
                  onClick={() => handleMenuClick('lyatoken')}>
                  <img src={menuIcon4} alt="menuIcon4" />
                  LYA TOKEN
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div
            className={`${styles.headerMenu} ${showMenu ? styles.show : ''}`}>
            <ul className={styles.menu}>
              <li onClick={() => showMainFooter(true)}>
                <a
                  href="#mint"
                  className={`${styles.item} ${styles.item1}  ${
                    headerMenuActive.mint && styles.active
                  }`}
                  onClick={() => handleMenuClick('mint')}>
                  Mint
                </a>
              </li>
              <li onClick={() => showMainFooter(false)}>
                <a
                  href="#dashboard"
                  className={`${styles.item} ${styles.item3} ${
                    headerMenuActive.dashboard && styles.active 
                  }`}
                  onClick={() => handleMenuClick('dashboard')}>
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
        )}
        {!loginBtn ? (
          <div className={styles.headerLogin}>
            <Link to={'./dashboard'}>
              <button
                className={`${styles.loginBtn} ${styles.btn}`}
                onClick={handleLoginBtn}>
                LOGIN
              </button>
            </Link>
          </div>
        ) : (
          <ConnecttBtn styles={styles} />
        )}
      </div>
    </div>
  );
};

export default Header;
