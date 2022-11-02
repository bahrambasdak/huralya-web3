import { Route, useLocation } from "react-router";
import { Routes } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Dashboard from "../pages/Dashboard";
import Genesis from "../pages/Genesis";
import InsigniaNFT from "../pages/InsigniaNFT";
import LyaToken from "../pages/LyaToken";
import Mint from "../pages/Mint";
// import { CSSTransition, TransitionGroup } from "react-transition-group";


const Container = () => {
  const location = useLocation();
  return (
    <div className="Container">
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
