import { FiCopy } from "react-icons/fi";
import topBg from "../img/dashboardPageTopBg.svg";
import classes from'../styles/dashboardPage.module.scss'//'dashboardPage.module.scss';
const Dashboard = () => {
  return (
    <div className={classes.dashboardPage}>
      <div className={classes.top}>
        <img src={topBg} alt="" className={classes.bgImg}/>
        <div className={classes.cards}>
          <div className={`${classes.card} , ${classes.wellcom}`}>
            <div>
              <div className={classes.mhmk}>wellcome mhmk</div>
              <div className={classes.level}>you are level3 in huralya genesis</div>
            </div>
            <div className="account">
              <span>Account Setting</span>
              <span>log out</span>
            </div>
          </div>
          <div className={`${classes.card} , ${classes.balance}`}>
            <div className="game-balance">
              <div className="title">game account Balance</div>
              <div className="count">
                <span>2500 LYA</span>
                <span>3000$</span>
              </div>
            </div>
            <div className="wallet-balance">
              <div className="title">wallet Balance</div>
              <div className="count">1700 LYA</div>
            </div>
          </div>
          <div className={`${classes.card} , ${classes.wallet}`}>
            <div className="top">
              <div className="addr">
                <span className="icon"></span>
                <span className="title">
                  <div className="from">
                    <span>From</span>
                    <span>wallet</span>
                  </div>
                  <div className="to">
                    <span>To</span>
                    <span>Game account</span>
                  </div>
                </span>
              </div>
              <div className="amount">
                <span className="title">Amount</span> <input type="number" />
              </div>
            </div>
            <button>Confirm</button>
          </div>
          <div className={`${classes.card} , ${classes.price}`}>
            <div className="logo">
              <img src="" alt="" />
              <span>
                <span>LYA Price</span>
                <span>$1.2</span>
              </span>
            </div>
            <div className="chart">
              <img src="" alt="" />
            </div>
            <div className="market-cap">Market Cap: $12,500,000</div>
          </div>
          <div className={`${classes.card} , ${classes.referral}`}>
            <div className="content">
                <div className="ref">Your referrals : 20</div>
                <div className="reward"><span>Rewards:</span><span>20LYA</span></div>
                <button>Claim</button>
            </div>
            <div className="ref-code"><p>Referral code : HTY65J</p> <span><FiCopy/></span></div>
          </div>
        </div>
      </div>
      <div className="nft"></div>
    </div>
  );
};

export default Dashboard;
