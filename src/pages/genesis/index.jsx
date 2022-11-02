import android_icon from "../img/genesis_android_icon.svg";
import apple_icon from "../img/genesis_apple_icon.svg";
import icon_bg from "../img/genesis_icon_bg.svg";
import genesis_background from "../img/genesis_bg.svg";
import genesis_logo from "../img/genesis_logo.svg";
import btn_logo from "../img/genesis_btn_logo.svg";
import genesis_trailer from "../img/genesis_trailer.svg";
import sector_btn from "../img/genesis_sector_btn.svg";
import GenesisBgSvg from "../components/svgComponent/GenesisBgSvg";
import GenesisTrailerBgSvg from "../components/svgComponent/GenesisTrailerBgSvg";
//import Convert from 'convert-svg-react';
import { useState } from "react";
import { useEffect } from "react";
import GenesisTrailerSvg from "../components/svgComponent/GenesisTrailerSvg";
import styles from './style.module.scss';



const Genesis = () => {
  const [genesisBgSvg , setGenesisBgSvg]= useState('');
  useEffect(()=>{
    //Convert(genesis_background).then(svg=>setGenesisBgSvg(svg))
  },[])
  return (
    <div className={styles.genesisPage}>

      {/* <img src={genesis_background} alt="" className="background-img" width={1100} height={445}/> */}
      <div className={styles.backgroundImg}><GenesisBgSvg  /></div>
      

      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.icons}>
            <img src={icon_bg} alt="" className={styles.iconsBg} width={110} height={205}/>
            <img src={android_icon} alt="" className={styles.androidIcon} width={55} height={55}/>
            <img src={apple_icon} alt="" className={styles.appleIcon} width={55} height={55}/>
            <p className={styles.text}>Download</p>
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.title}>
            <p className={styles.text}>
              The first creation of
              <span className={styles.textRight}>
                <img src={genesis_logo} alt="" width={80} height={55}/>
                <p>Huralya</p>
              </span>
            </p>
          </div>
          <div className={styles.explore-btn}>
            <button>
              Explore the genesis <img src={btn_logo} alt="" width={40} height={35}/>
            </button>
          </div>
          <div className={styles.sector-btn}>
            <button>
              <img src={sector_btn} alt="" width={55} height={20}/>
            </button>
          </div>
        </div>

        <div className={styles.right}>
          <img src={genesis_trailer} alt="" width={150} height={155}/>
{/* <GenesisTrailerBgSvg/>
          <GenesisTrailerSvg className="trailer-svg"/> */}
          <div>
            <button></button>
            <p>watch trailer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genesis;
