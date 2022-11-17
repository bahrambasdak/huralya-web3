import { Route, useLocation } from 'react-router';
import { Routes } from 'react-router-dom';
import AboutUs from '../pages/about-us/index';
import Dashboard from '../pages/dashboard/index';
import Genesis from '../pages/genesis/index';
import InsigniaNFT from '../pages/insignia-nft/index';
import LyaToken from '../pages/lya-token/index';
import Mint from '../pages/dashboard/mint/index';
import styles from '../styles/App.module.scss';
import { useRef } from 'react';
import { useEffect } from 'react';

const Container = ({ handleChangeMenu }) => {
  const location = useLocation();
  const mainScroll = useRef();


  // const handleScroll = (e) => {
  //   const containerWidth = mainScroll.current.clientWidth + 20;
  //   const scrollLeft = mainScroll.current.scrollLeft;

  //   if (location.pathname === '/huralya' || location.pathname === '/') {
  //     if (scrollLeft < containerWidth * 0.9) {
  //       handleChangeMenu('genesis');
  //       //  mainScroll.current.scrollTo(containerWidth * 0, 0);
  //     } else if (scrollLeft < containerWidth * 1.9) {
  //       handleChangeMenu('aboutus');
  //       // mainScroll.current.scrollTo(containerWidth * 1, 0);
  //     } else if (scrollLeft < containerWidth * 2.9) {
  //       handleChangeMenu('insignia');
  //       //  mainScroll.current.scrollTo(containerWidth * 2, 0);
  //     } else {
  //       handleChangeMenu('lyatoken');
  //       // mainScroll.current.scrollTo(containerWidth * 3, 0);
  //     }
  //   } else if (location.pathname === '/dashboard') {
  //     if (scrollLeft < containerWidth * 0.9) handleChangeMenu('mint');
  //     else if (scrollLeft < containerWidth * 1.9) handleChangeMenu('dashboard');
  //   }
  // };

  // useEffect(() => {
  //   //mainScroll.current.scrollBy(250,0);
  //   const containerWidth = mainScroll.current.clientWidth + 20;
  //   const scrollLeft = mainScroll.current.scrollLeft;
  //   if (location.pathname === '/huralya') {
  //     if (scrollLeft < containerWidth * 0.9) {
  //       handleChangeMenu('genesis');
  //       //  mainScroll.current.scrollTo(containerWidth * 0, 0);
  //     } else if (scrollLeft < containerWidth * 1.9) {
  //       handleChangeMenu('aboutus');
  //       // mainScroll.current.scrollTo(containerWidth * 1, 0);
  //     } else if (scrollLeft < containerWidth * 2.9) {
  //       handleChangeMenu('insignia');
  //       //  mainScroll.current.scrollTo(containerWidth * 2, 0);
  //     } else {
  //       handleChangeMenu('lyatoken');
  //       // mainScroll.current.scrollTo(containerWidth * 3, 0);
  //     }
  //   } else if (location.pathname === '/dashboard') {
  //     if (scrollLeft < containerWidth * 0.9) handleChangeMenu('mint');
  //     else if (scrollLeft < containerWidth * 1.9) handleChangeMenu('dashboard');
  //   }
  // }, [location]);

  return (
    <div
      className={styles.Container}>
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
