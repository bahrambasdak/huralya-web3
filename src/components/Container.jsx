import { Route, useLocation } from 'react-router';
import { Routes } from 'react-router-dom';
import AboutUs from '../pages/about-us/index';
import Dashboard from '../pages/dashboard/index';
import Genesis from '../pages/genesis/index';
import InsigniaNFT from '../pages/insignia-nft/index';
import LyaToken from '../pages/lya-token/index';
import Mint from '../pages/dashboard/mint/index';
import styles from '../styles/App.module.scss';

const Container = () => {
  return (
    <div className={styles.Container}>
      <Routes>
        <Route
          path="/huralya"
          element={
            <>
              <Genesis />
              <AboutUs />
              <InsigniaNFT />
              <LyaToken />
            </>
          }></Route>

        <Route
          path="/dashboard"
          element={
            <>
              <Mint />
              <Dashboard />
            </>
          }></Route>

        <Route
          path="/"
          element={
            <>
              <Genesis />
              <AboutUs />
              <InsigniaNFT />
              <LyaToken />
            </>
          }></Route>
      </Routes>
    </div>
  );
};

export default Container;
