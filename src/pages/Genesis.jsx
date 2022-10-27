import android_icon from "../img/genesis_android_icon.svg";
import apple_icon from "../img/genesis_apple_icon.svg";
import icon_bg from "../img/genesis_icon_bg.svg";
import genesis_background from "../img/genesis_bg.svg";
import genesis_logo from "../img/genesis_logo.svg";
import btn_logo from "../img/genesis_btn_logo.svg";
import genesis_trailer from "../img/genesis_trailer.svg";
import sector_btn from "../img/genesis_sector_btn.svg";
const Genesis = () => {
  return (
    <div className="genesis-page">
      <img src={genesis_background} alt="" className="background-img" width={1100} height={445}/>

      <div className="content">
        <div className="left">
          <div className="icons">
            <img src={icon_bg} alt="" className="icons-bg" width={110} height={205}/>
            <img src={android_icon} alt="" className="android-icon" width={55} height={55}/>
            <img src={apple_icon} alt="" className="apple-icon" width={55} height={55}/>
            <p className="text">Download</p>
          </div>
        </div>

        <div className="center">
          <div className="title">
            <p className="text">
              The first creation of
              <span className="text-right">
                <img src={genesis_logo} alt="" width={80} height={55}/>
                <p>Huralya</p>
              </span>
            </p>
          </div>
          <div className="explore-btn">
            <button>
              Explore the genesis <img src={btn_logo} alt="" width={40} height={35}/>
            </button>
          </div>
          <div className="sector-btn">
            <button>
              <img src={sector_btn} alt="" width={55} height={20}/>
            </button>
          </div>
        </div>

        <div className="right">
          <img src={genesis_trailer} alt="" width={150} height={155}/>
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
