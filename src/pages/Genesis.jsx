import android_icon from "../img/genesis_android_icon.svg";
import apple_icon from "../img/genesis_apple_icon.svg";
import icon_bg from "../img/genesis_icon_bg.svg";
import genesis_background from "../img/genesis_bg.svg";
const Genesis = () => {
  return (
    <div className="genesis-page">
      <img src={genesis_background} alt="" className="background-img" />
      <div className="content">
        <div className="left">
          <div className="icons">
            <img src={icon_bg} alt="" className="icons-bg" />

            <img src={android_icon} alt="" className="android-icon" />
            <img src={apple_icon} alt="" className="apple-icon" />
          </div>
          <p className="text">Download</p>
        </div>
        <div className="center"></div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Genesis;
