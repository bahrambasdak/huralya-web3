import styles from './styles/App.module.scss';
import Footer from './components/Footer';
import Container from './components/Container';
import Header from './components/header/Header';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
      if (e.target.className.includes('dot')) setShowMenu((prev) => !prev);
      else if (showMenu) setShowMenu((prev) => !prev);
    } catch (error) {}
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
  useEffect(() => {
    const handleScroll = (e) => {
      if (
        window.scrollY <=
        document.getElementById('mintPage')?.offsetTop + 200
      ) {
        handleChangeMenu('mint');
      } else if (
        window.scrollY <=
        document.getElementById('dashboardPage')?.offsetTop + 200
      ) {
        handleChangeMenu('dashboard');
      }

      if (
        window.scrollY <=
        document.getElementById('genesisPage')?.offsetTop + 300
      ) {
        handleChangeMenu('genesis');
      } else if (
        window.scrollY <=
        document.getElementById('aboutusPage')?.offsetTop + 300
      ) {
        handleChangeMenu('aboutus');
      } else if (
        window.scrollY <=
        document.getElementById('insigniaPage')?.offsetTop + 300
      ) {
        handleChangeMenu('insignia');
      } else if (
        window.scrollY <=
        document.getElementById('lyatokenPage')?.offsetTop + 300
      ) {
        handleChangeMenu('lyatoken');
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

          <Container />
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
