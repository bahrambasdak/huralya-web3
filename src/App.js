//import "./insignia.scss";
//import "./genesis.scss";
//import "./about_us.scss";
//import "./mint.scss";

//import classes from "./styles/dashboardPage.module.scss";
import styles from './styles/App.module.scss';
//import "./App.scss";
import Footer from './components/Footer';
import Container from './components/Container';
import Header from './components/header/Header';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
//import { CSSTransition, TransitionGroup } from "react-transition-group";
import DashboardFooter from './components/dashboard-footer';
import ConnectWalletModal from './components/modals/ConnectWallet';
import { AuthProvider } from './contexts/Auth';
function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [loginBtn, setLoginBtn] = useState(false);
  const [showMainFooter, setShowMainFooter] = useState(false);
  const handleLoginBtn = () => {
    setLoginBtn((prev) => !prev);
  };
  const toggleMenu = (e) => {
    e.stopPropagation();
    try {
      if ( e.target.className.includes('dot')) setShowMenu((prev) => !prev);
      else if (showMenu) setShowMenu((prev) => !prev);
    } catch (error) {
      
    }

  };
  

  const [headerMenuActive, setHeaderMenuActive] = useState({
    genesis: true,
    aboutus: false,
    insignia: false,
    lyatoken: false,
    mint: false,
    dashboard: true
  });
  const handleChangeMenu = (pageName) => {
    setHeaderMenuActive((prev) => ({
      genesis: false,
      aboutus: false,
      insignia: false,
      lyatoken: false,
      [pageName]: true
    }));
  };

  return (
    <div className={`${styles.App}`} onClick={toggleMenu}>
      <BrowserRouter>
      <AuthProvider>
        <Header
          toggleMenu={toggleMenu}
          showMenu={showMenu}
          styles={styles}
          handleLoginBtn={handleLoginBtn}
          loginBtn={loginBtn}
          showMainFooter={setShowMainFooter}
          handleMenuClick={handleChangeMenu}
          headerMenuActive={headerMenuActive}
        />

        <Container
          handleChangeMenu={handleChangeMenu}
          headerMenuActive={headerMenuActive}
        />
        {loginBtn && !showMainFooter ? (
          <DashboardFooter classes={styles} />
        ) : (
          <Footer />
        )}
       
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
