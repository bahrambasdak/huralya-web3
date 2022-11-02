import { Route, useLocation } from "react-router";
import { Routes } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Dashboard from "../pages/Dashboard";
import Genesis from "../pages/Genesis";
import InsigniaNFT from "../pages/InsigniaNFT";
import LyaToken from "../pages/LyaToken";
import Mint from "../pages/Mint";


const Container = () => {
  const location = useLocation();
  return (
    <div className="Container">

      <Routes>


        <Route path="/lyatoken" element={<LyaToken />}></Route>
        <Route path="/insignia" element={<InsigniaNFT />}></Route>
        <Route path="/genesis" element={<Genesis />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/mint" element={<Mint />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>

        <Route path="/" element={<LyaToken />}></Route>

      </Routes>

    </div>
  );
};

export default Container;
