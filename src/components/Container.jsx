import { Route, useLocation } from "react-router";
import { Routes } from "react-router-dom";
import AboutUs from "../pages/about-us/index";
import Dashboard from "../pages/dashboard/index";
import Genesis from "../pages/genesis/index";
import InsigniaNFT from "../pages/insignia-nft/index";
import LyaToken from "../pages/lya-token/index";
import Mint from "../pages/dashboard/mint/index";
import styles from "../styles/App.module.scss";
import { useRef } from "react";
import { useEffect } from "react";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

const Container = ({ handleChangeMenu, headerMenuActive }) => {
  const location = useLocation();
  let pageHeightStyle = "";
  const mainScroll = useRef();
  let scrollPositionX = 0;

  const handleMousWeel = (e) => {
    e.stopPropagation();
    const containerWidth = mainScroll.current.clientWidth + 20;
    const deltaY = e.deltaY;
    if (
      e.target.parentElement.parentElement.parentElement.id !== "inScSec" &&
      e.target.parentElement.parentElement.id !== "inScSec" &&
      e.target.parentElement.id !== "inScSec" &&
      containerWidth > 1024
    ) {
      mainScroll.current.scrollBy((deltaY * containerWidth) / 100, 0);

      let scrollLeft = mainScroll.current.scrollLeft;
      if (deltaY > 0) scrollLeft += containerWidth;
      else scrollLeft -= containerWidth;

      if (location.pathname === "/huralya") {
        if (scrollLeft < containerWidth * 0.9) handleChangeMenu("genesis");
        else if (scrollLeft < containerWidth * 1.9) handleChangeMenu("aboutus");
        else if (scrollLeft < containerWidth * 2.9)
          handleChangeMenu("insignia");
        else handleChangeMenu("lyatoken");
      } else if (location.pathname === "/dashboard") {
        if (scrollLeft < containerWidth * 0.9) handleChangeMenu("mint");
        else if (scrollLeft < containerWidth * 1.9)
          handleChangeMenu("dashboard");
      }
    }
  };

  const handletouch = (e) => {
    // const containerWidth = mainScroll.current.clientWidth + 20;
    // const scrollLeft = mainScroll.current.scrollLeft;
    // console.log(mainScroll.current.scrollLeft);
    // if (location.pathname === "/huralya") {
    //   if (scrollLeft < containerWidth * 0.5) {
    //     handleChangeMenu("genesis");
    //     mainScroll.current.scrollTo(containerWidth * 0, 0);
    //   } else if (scrollLeft > containerWidth * 0.5 && scrollLeft < containerWidth*1.5) {
    //     handleChangeMenu("aboutus");
    //     mainScroll.current.scrollTo(containerWidth * 1, 0);
    //   } else if (scrollLeft < containerWidth * 2.5 && scrollLeft > containerWidth * 1.5) {
    //     handleChangeMenu("insignia");
    //     mainScroll.current.scrollTo(containerWidth * 2, 0);
    //   } else if((scrollLeft < containerWidth * 3 && scrollLeft > containerWidth * 2.5)){
    //     handleChangeMenu("lyatoken");
    //     mainScroll.current.scrollTo(containerWidth * 3, 0);
    //   }
    // } else if (location.pathname === "/dashboard") {
    //   if (scrollLeft < containerWidth * 0.9) handleChangeMenu("mint");
    //   else if (scrollLeft < containerWidth * 1.9) handleChangeMenu("dashboard");
    // }
  };

  const handleScroll = (e) => {
    const containerWidth = mainScroll.current.clientWidth + 20;
    const scrollLeft = mainScroll.current.scrollLeft;

    //console.log(mainScroll.current.scrollLeft);
    if (location.pathname === "/huralya" || location.pathname === "/") {
      if (scrollLeft < containerWidth * 0.9) {
        handleChangeMenu("genesis");
        //  mainScroll.current.scrollTo(containerWidth * 0, 0);
      } else if (scrollLeft < containerWidth * 1.9) {
        handleChangeMenu("aboutus");
        // mainScroll.current.scrollTo(containerWidth * 1, 0);
      } else if (scrollLeft < containerWidth * 2.9) {
        handleChangeMenu("insignia");
        //  mainScroll.current.scrollTo(containerWidth * 2, 0);
      } else {
        handleChangeMenu("lyatoken");
        // mainScroll.current.scrollTo(containerWidth * 3, 0);
      }
    } else if (location.pathname === "/dashboard") {
      if (scrollLeft < containerWidth * 0.9) handleChangeMenu("mint");
      else if (scrollLeft < containerWidth * 1.9) handleChangeMenu("dashboard");
    }
  };
const handle=(e)=>{
  console.log(e);
}
  useEffect(() => {
    //mainScroll.current.scrollBy(250,0);
    const containerWidth = mainScroll.current.clientWidth + 20;
    const scrollLeft = mainScroll.current.scrollLeft;
    if (location.pathname === "/huralya") {
      if (scrollLeft < containerWidth * 0.9) {
        handleChangeMenu("genesis");
        //  mainScroll.current.scrollTo(containerWidth * 0, 0);
      } else if (scrollLeft < containerWidth * 1.9) {
        handleChangeMenu("aboutus");
        // mainScroll.current.scrollTo(containerWidth * 1, 0);
      } else if (scrollLeft < containerWidth * 2.9) {
        handleChangeMenu("insignia");
        //  mainScroll.current.scrollTo(containerWidth * 2, 0);
      } else {
        handleChangeMenu("lyatoken");
        // mainScroll.current.scrollTo(containerWidth * 3, 0);
      }
    } else if (location.pathname === "/dashboard") {
      if (scrollLeft < containerWidth * 0.9) handleChangeMenu("mint");
      else if (scrollLeft < containerWidth * 1.9) handleChangeMenu("dashboard");
    }
  },[location]);

  return (
    <div
      className={`${styles.Container} ${
        headerMenuActive.genesis
          ? styles.genesisPageShow
          : headerMenuActive.insignia
          ? styles.insigniaPageShow
          : headerMenuActive.aboutus
          ? styles.aboutusPageShow
          : headerMenuActive.lyatoken
          ? styles.lyatokenPageShow
          : headerMenuActive.mint
          ? styles.mintPageShow
          : ""
      }`}
    >
      {/* <TransitionGroup component={null}>
            <CSSTransition key={location.key} classNames="fade" timeout={300}> */}
      <div
        onWheel={handleMousWeel}
        onScroll={handleScroll}
        onTouchEnd={handletouch}
        onSeeked={handle}
        ref={mainScroll}
      >
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
            }
          ></Route>

          <Route
            path="/dashboard"
            element={
              <>
                <Mint />
                <Dashboard />
              </>
            }
          ></Route>

          <Route
            path="/"
            element={
              <>
                <Genesis />
                <AboutUs />
                <InsigniaNFT />
                <LyaToken />
              </>
            }
          ></Route>
        </Routes>
      </div>
      {/* </CSSTransition>
          </TransitionGroup> */}
    </div>
  );
};

export default Container;
