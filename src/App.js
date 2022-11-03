//import "./insignia.scss";
//import "./genesis.scss";
//import "./about_us.scss";
//import "./mint.scss";

//import classes from "./styles/dashboardPage.module.scss";
import styles from "./styles/App.module.scss";
//import "./App.scss";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Header from "./components/header/Header";
import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
//import { CSSTransition, TransitionGroup } from "react-transition-group";
import DashboardFooter from "./components/dashboard-footer";
function App() {
  const [showMenu, setShowMenu] = useState(false);
  //const location = useLocation();
  const [loginBtn, setLoginBtn] = useState(false);
  //const navigate = useNavigate();
  const handleLoginBtn = () => {
    setLoginBtn((prev) => !prev);

  };
  const toggleMenu = (e) => {
    e.stopPropagation();
    console.log(e.target.className);
    if (e.target.className.includes("dot")) setShowMenu((prev) => !prev);
    else if (showMenu) setShowMenu((prev) => !prev);
  };
  return (
    <div className={`${styles.App}`} onClick={toggleMenu}>
      <BrowserRouter>
        <Header
          toggleMenu={toggleMenu}
          showMenu={showMenu}
          styles={styles}
          handleLoginBtn={handleLoginBtn}
          loginBtn={loginBtn}
        />

        <Container />
{loginBtn ? <DashboardFooter classes={styles} /> :<Footer /> }
        
       
      </BrowserRouter>
    </div>
  );
}

export default App;
