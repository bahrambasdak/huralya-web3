//import "./insignia.scss";
import './genesis.scss';
import './about_us.scss';
import './mint.scss';
import './App.scss';
import styles from './styles/App.module.scss';
import Footer from './components/Footer';
import Container from './components/Container';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import DashboardFooter from './components/DashboardFooter';
function App() {
  const [showMenu, setShowMenu] = useState(false);
  //const location = useLocation();

  const toggleMenu = (e) => {
    e.stopPropagation();
    console.log(e.target.className);
    if (e.target.className.includes('dot')) setShowMenu((prev) => !prev);
    else if (showMenu) setShowMenu((prev) => !prev);
  };
  return (
    <div className={`${styles.App} App`} onClick={toggleMenu}>
      <BrowserRouter>
        <Header toggleMenu={toggleMenu} showMenu={showMenu} />

        <Container />

        <DashboardFooter />
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
