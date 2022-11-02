import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import menuIcon1 from '../assets/images/menu_icon1.svg';
import menuIcon2 from '../assets/images/menu_icon2.svg';
import menuIcon3 from '../assets/images/menu_icon3.svg';
import menuIcon4 from '../assets/images/menu_icon4.svg';
import { ImMenu3, ImMenu4 } from 'react-icons/im';
import { useState } from 'react';
import Logo1 from './svgComponent/Logo';
import Web3 from 'web3';
import WalletConnect from '@walletconnect/client';
import QRCodeModal from '@walletconnect/qrcode-modal';

const Header = ({ toggleMenu, showMenu }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn((prev) => !prev);
  };

  /*
  const connector = new WalletConnect({
    bridge: 'https://bridge.walletconnect.org',
    qrcodeModal: QRCodeModal
  });

  const walletConnectClick = () => {
    if (!connector.connected) {
      connector.createSession();
    } else {
    }

    connector.on('connect', (error, payload) => {
      if (error) {
        throw error;
      }

      const { accounts, chainId } = payload.params[0];
    });

    connector.on('session_update', (error, payload) => {
      if (error) {
        throw error;
      }
      const { accounts, chainId } = payload.params[0];
    });

    connector.on('disconnect', (error, payload) => {
      if (error) {
        throw error;
      }
    });
  };
*/
  return (
    <div className="header">
      <div className="header-content">
        <button className="mobile-menu-btn">
          <div
            className={`dots ${showMenu ? 'active' : ''}`}
            onClick={toggleMenu}>
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
          <div className={`header-menu ${showMenu ? 'show' : ''}`}>
            <ul className="menu">
              <li>
                <NavLink
                  to="/genesis"
                  className="item item1"
                  activeclassname="active">
                  <img src={menuIcon1} alt="menuIcon1" />
                  GENESIS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className="item item2"
                  activeclassname="active">
                  <img src={menuIcon2} alt="menuIcon2" />
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/insignia-nft"
                  className="item item3"
                  activeclassname="active">
                  <img src={menuIcon3} alt="menuIcon3" />
                  insignia NFT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/lya-token"
                  className="item item4"
                  activeclassname="active">
                  <img src={menuIcon4} alt="menuIcon4" />
                  LYA TOKEN
                </NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <div className={`header-menu ${showMenu ? 'show' : ''}`}>
            <ul className="menu">
              <li>
                <NavLink
                  to="/mint"
                  className="item item1"
                  activeclassname="active">
                  Mint
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className="item item3"
                  activeclassname="active">
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
