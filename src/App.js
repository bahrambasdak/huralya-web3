import "./App.scss";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation();
    console.log(e.target.className);
    if (e.target.className.includes("mobile-menu"))
      setShowMenu((prev) => !prev);
    else if (showMenu) setShowMenu((prev) => !prev);
  };
  return (
    <div className="App" onClick={toggleMenu}>
      <BrowserRouter>
        <Header toggleMenu={toggleMenu} showMenu={showMenu} />
        <Content />

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
