import android_icon from "../../assets/images/genesis_android_icon.svg";
import apple_icon from "../../assets/images/genesis_apple_icon.svg";
import icon_bg from "../../assets/images/genesis_icon_bg.svg";
//import genesis_background from "../../assets/images/genesis_bg.svg";
import genesis_logo from "../../assets/images/genesis_logo.svg";
import btn_logo from "../../assets/images/genesis_btn_logo.svg";
import genesis_trailer from "../../assets/images/genesis_trailer.svg";
import sector_btn from "../../assets/images/genesis_sector_btn.svg";
import GenesisBgSvg from "../../components/svgComponent/GenesisBgSvg";
//import GenesisTrailerBgSvg from "../../components/svgComponent/GenesisTrailerBgSvg";
//import Convert from 'convert-svg-react';
//import { useState } from "react";
import { useEffect } from "react";
//import GenesisTrailerSvg from "../../components/svgComponent/GenesisTrailerSvg";
import styles from './style.module.scss';
import GenesisWatchBtn from "../../components/svgComponent/GenesisWatchBtn";
import GenesisIconBg from "../../components/svgComponent/GenesisIconBg";
import GenesisLogo from "../../components/svgComponent/GenesisLogo";
import GenesisExplorBtn from "../../components/svgComponent/GenesisExploreBtn";
//import GenesisLogo from "../../components/svgComponent/GenesisLogo";



const Genesis = () => {
  //const [genesisBgSvg , setGenesisBgSvg]= useState('');
  useEffect(()=>{
    //Convert(genesis_background).then(svg=>setGenesisBgSvg(svg))
  },[])
  return (
    <div className={styles.genesisPage} >
<div id="genesis" style={{position:'absolute' , top:'-100px'}}></div>
      {/* <img src={genesis_background} alt="" className="background-img" width={1100} height={445}/> */}
      <div className={styles.backgroundImg}><GenesisBgSvg  /></div>
      

      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.icons}>
            <GenesisIconBg className={styles.iconsBg} width={110} height={205}/>
            <img src={android_icon} alt="" className={styles.androidIcon} width={55} height={55}/>
            <img src={apple_icon} alt="" className={styles.appleIcon} width={55} height={55}/>
          </div>
        </div>

        <div className={styles.center}>
          <GenesisWatchBtn className={styles.watchBtn}/>
          <div className={styles.title}>
            <p className={styles.text}>
              The first creation of
              <span className={styles.textRight}>
                <GenesisLogo width={80} height={55} className={styles.img}/>
                <p>Huralya</p>
              </span>
            </p>

            <div className={styles.exploreBtn}>
            <button>
              Explore the genesis 
              <GenesisExplorBtn width={48} height={31} className={styles.exlogo}/>
            </button>
          </div>
          </div>


        </div>

      </div>
    </div>
  );
};

export default Genesis;
