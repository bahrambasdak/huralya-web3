import android_icon from "../../assets/images/genesis_android_icon.svg";
import apple_icon from "../../assets/images/genesis_apple_icon.svg";
import icon_bg from "../../assets/images/genesis_icon_bg.svg";
import genesis_background from "../../assets/images/genesis_bg.svg";
import genesis_logo from "../../assets/images/genesis_logo.svg";
import btn_logo from "../../assets/images/genesis_btn_logo.svg";
import genesis_trailer from "../../assets/images/genesis_trailer.svg";
import sector_btn from "../../assets/images/genesis_sector_btn.svg";
import GenesisBgSvg from "../../components/svgComponent/GenesisBgSvg";
import GenesisTrailerBgSvg from "../../components/svgComponent/GenesisTrailerBgSvg";
//import Convert from 'convert-svg-react';
import { useState } from "react";
import { useEffect } from "react";
import GenesisTrailerSvg from "../../components/svgComponent/GenesisTrailerSvg";
import styles from './style.module.scss';
import GenesisLogo from "../../components/svgComponent/GenesisLogo";



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
                {/* <GenesisLogo width={80} height={55} className={styles.img}/> */}
                <p>Huralya</p>
              </span>
            </p>
          </div>
          <div className={styles.exploreBtn}>
            <button>
              Explore the genesis <img src={btn_logo} alt="" width={40} height={35}/>
            </button>
          </div>
          <div className={styles.sectorBtn}>
            <button>
              <img src={sector_btn} alt="" width={55} height={20}/>
            </button>
          </div>
        </div>

        <div className={styles.right}>
          <img src={genesis_trailer} alt="" width={150} height={155}/>
{/* <GenesisTrailerBgSvg/>
          <GenesisTrailerSvg className="trailer-svg"/> */}
           {/* <GenesisTrailerSvg className="trailer-svg"/> 
           <GenesisTrailerBgSvg/> */}
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
