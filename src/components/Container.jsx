import { Route, useLocation } from 'react-router';
import { Routes } from 'react-router-dom';
import AboutUs from '../pages/about-us';
import Dashboard from '../pages/dashboard';
import Genesis from '../pages/genesis';
import InsigniaNFT from '../pages/insignia-nft';
import LyaToken from '../pages/lya-token';
import Mint from '../pages/dashboard/mint';

const Container = () => {
  return (
    <div className="Container">
      <Routes>
        <Route path="/lya-token" element={<LyaToken />}></Route>
        <Route path="/insignia-nft" element={<InsigniaNFT />}></Route>
        <Route path="/genesis" element={<Genesis />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/mint" element={<Mint />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/" element={<Genesis />}></Route>
      </Routes>
    </div>
  );
};

export default Container;
