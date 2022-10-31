import { FiCopy } from "react-icons/fi";
import topBg from "../img/dashboardPageTopBg.svg";
import icon1 from "../img/dashboardPageIcon1.svg";
import classes from "../styles/dashboardPage.module.scss"; //'dashboardPage.module.scss';
import lyaLogo from "../img/lya_page_logo.svg";
import chart from "../img/dashboardPageChart.svg";
const Dashboard = () => {
  return (
    <div className={classes.dashboardPage}>
      <div className={classes.top}>
        <img src={topBg} alt="" className={classes.bgImg} />
        <div className={classes.cards}>
          <div className={`${classes.card} , ${classes.wellcom}`}>
            <div className={classes.title}>
              <div className={classes.mhmk}>
                wellcome <span>mhmk</span>
              </div>
              <div className={classes.level}>
                you are level3 in huralya genesis
              </div>
            </div>
            <div className={classes.account}>
              <span>Account Setting</span>
              <span>log out</span>
            </div>
          </div>

          <div className={`${classes.card} , ${classes.balance}`}>
            <div className={classes.gameBalance}>
              <div>game account Balance</div>
              <div >
                <span>2500 LYA</span>
                <span>3000$</span>
              </div>
            </div>
            <div className={classes.walletBalance}>
              <div>wallet Balance</div>
              <div>1700 LYA</div>
            </div>
          </div>

          <div className={`${classes.card} , ${classes.wallet}`}>
            <div>
              <div className={classes.addr}>
                <span ><img src={icon1} alt="" /></span>
                <span >
                  <div >
                    <span>From</span>
                    <span>wallet</span>
                  </div>
                  <div>
                    <span>To</span>
                    <span>Game account</span>
                  </div>
                </span>
              </div>
              <div className={classes.amount}>
                <span>Amount</span>
                <input type="text" />
              </div>
            </div>
            <div><button className="btn">Confirm</button></div>
          </div>

          <div className={`${classes.card} , ${classes.price}`}>
            <div className={classes.logo}>
              <img src={lyaLogo} alt="" width={50} height={50}/>
              <span>
                <span>LYA Price</span>
                <span>$1.2</span>
              </span>
            </div>
            <div className={classes.chart}>
              <img src={chart} alt="" width={225} height={90}/>
            </div>
            <div className={classes.marketCcap}>Market Cap: $12,500,000</div>
          </div>


          <div className={`${classes.card} , ${classes.referral}`}>
            <div className={classes.content}>
              <div className={classes.ref}>Your referrals : 20</div>
              <div className={classes.reward}>
                <span>Rewards:</span>
                <span>20LYA</span>
              </div>
              <button className="btn">Claim</button>
            </div>
            <div className={classes.refCode}>
              <p>Referral code : HTY65J</p>
              <span>
                <FiCopy />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.nft}></div>

      <div className={classes.dashboardFooter}></div>
    </div>
  );
};

export default Dashboard;
