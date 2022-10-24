import { Route } from "react-router";
import { Routes } from "react-router-dom";
import InsigniaNFT from "../pages/InsigniaNFT";
import LyaToken from "../pages/LyaToken";

const Container = () => {
  return (
    <div className="Container">
      <Routes>
        <Route path="/lyatoken" element={<LyaToken />}></Route>
        <Route path="/insignia" element={<InsigniaNFT />}></Route>
        <Route path="/" element={<LyaToken />}></Route>
      </Routes>
    </div>
  );
};

export default Container;