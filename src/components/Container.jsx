import { Route, useLocation } from "react-router";
import { Routes } from "react-router-dom";
import AboutUs from "../pages/about-us/index";
import Dashboard from "../pages/dashboard/index";
import Genesis from "../pages/genesis/index";
import InsigniaNFT from "../pages/insignia-nft/index";
import LyaToken from "../pages/lya-token/index";
import Mint from "../pages/dashboard/mint/index";
import styles from "../styles/App.module.scss";
// import { CSSTransition, TransitionGroup } from "react-transition-group";


const Container = () => {
  const location = useLocation();
  return (
    <div className={styles.Container}>
        {/* <TransitionGroup component={null}>
            <CSSTransition key={location.key} classNames="fade" timeout={300}> */}
      <Routes>
        <Route path="/lyatoken" element={<LyaToken />}></Route>
        <Route path="/insignia" element={<InsigniaNFT />}></Route>
        <Route path="/genesis" element={<Genesis />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/mint" element={<Mint />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>

        <Route path="/" element={<LyaToken />}></Route>

      </Routes>
      {/* </CSSTransition>
          </TransitionGroup> */}
    </div>
  );
};

export default Container;
