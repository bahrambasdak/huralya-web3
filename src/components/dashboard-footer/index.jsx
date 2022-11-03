//import classes from "./styles.module.scss";

import { BsWhatsapp } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import android_icon from "../../assets/images/genesis_android_icon.svg";
import apple_icon from "../../assets/images/genesis_apple_icon.svg";

const DashboardFooter = ({classes}) => {
    return ( <div className={classes.dashboardFooter}>
      <div className={classes.footerContent}>
        <div className={classes.footerLeft}>
          <p>Whitepaper</p>
          <p>Bug Bounty</p>
          <div className="social-icons">
            <ul>
              <li className="icon">
                <ImFacebook />
              </li>
              <li className="icon">
                <AiOutlineTwitter />
              </li>

              <li className="icon">
                <BsWhatsapp />
              </li>
              <li className="icon">
                <FaLinkedinIn />
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.footerCenter}>
          <div className={classes.icons}>
            <span>
              <img
                src={android_icon}
                alt=""
                className="android-icon"
                width={55}
                height={55}
              />
            </span>
            <span>
              <img
                src={apple_icon}
                alt=""
                className="apple-icon"
                width={55}
                height={55}
              />
            </span>
          </div>
          <div>learn how to earn...</div>
          <div className={classes.reserved}>
            Huralya © 2022 , All rights reserved{" "}
          </div>
        </div>

        <div className={classes.footerRight}>
          <span>
            <div> tradable on</div>
            <div>open sea - rarible</div>
            <div>binance - kucoin</div>
            <div>uniswap - pancakeswap</div>
          </span>
          <span>
            <div></div>
            <div> Customer Support</div>
            <div>Terms & agreement</div>
            <div>Privacy Policy</div>
          </span>
        </div>
        </div>
      </div> );
}
 
export default DashboardFooter;