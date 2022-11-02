//import "./insignia.scss";
import "./genesis.scss";
import "./about_us.scss";
import "./mint.scss";
import "./App.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Header from "./components/Header";
import { BrowserRouter, useLocation } from "react-router-dom";
import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = (e) => {
    e.stopPropagation();
    console.log(e.target.className);
    if (e.target.className.includes("dot")) setShowMenu((prev) => !prev);
    else if (showMenu) setShowMenu((prev) => !prev);
  };
  return (
    <div className="App" onClick={toggleMenu}>
      <BrowserRouter>
        <Header toggleMenu={toggleMenu} showMenu={showMenu} />
        <TransitionGroup component={null}>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Container />
        </CSSTransition>
          </TransitionGroup>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
