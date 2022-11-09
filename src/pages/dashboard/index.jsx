import { FiCopy } from "react-icons/fi";
//import topBg from "../../assets/images/dashboardPageTopBg.svg";
import icon1 from "../../assets/images/dashboardPageIcon1.svg";
import classes from "./style.module.scss"; //'dashboardPage.module.scss';
import lyaLogo from "../../assets/images/lya_page_logo.svg";
import chart from "../../assets/images/dashboardPageChart.svg";
import userLogo from "../../assets/images/dashboardPageUserLogo.svg";

import { useState } from "react";
//import DashboardFooter from "../components/DashboardFooter";

const Dashboard = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "#3256",
      age: "45d",
      mp: 1,
      img: userLogo,
      select: false,
    },
    {
      id: 2,
      name: "#3256",
      age: "45d",
      mp: 1,
      img: userLogo,
      select: false,
    },
    {
      id: 3,
      name: "#3256",
      age: "45d",
      mp: 1,
      img: userLogo,
      select: false,
    },
    {
      id: 4,
      name: "#3256",
      age: "45d",
      mp: 1,
      img: userLogo,
      select: false,
    },
  ]);

  const [fromTo, setFromTo] = useState("from-wallet");

  const toggleSelect = (userId) => {
    setUsers((prev) =>
      prev.map((user) => {
        const userSelect = user.select;
        return {
          ...user,
          select: user.id === userId ? !userSelect : userSelect,
        };
      })
    );
  };

  return (
    <div className={classes.dashboardPage} id="dashboard">
      <div className={classes.top}>
        {/* <img src={topBg} alt="" className={classes.bgImg} /> */}
        <div className={classes.cards}>
          <div className={`${classes.card} ${classes.wellcom}`}>
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

          <div className={`${classes.card} ${classes.balance}`}>
            <div className={classes.gameBalance}>
              <div>game account Balance</div>
              <div>
                <span>2500 LYA</span>
                <span>3000$</span>
              </div>
            </div>
            <div className={classes.walletBalance}>
              <div>wallet Balance</div>
              <div>1700 LYA</div>
            </div>
          </div>

          <div className={`${classes.card}  ${classes.wallet}`}>
            <div>
              <div className={classes.addr}>
                <span
                  onClick={() =>
                    setFromTo((prev) =>
                      prev === "from-wallet" ? "to-wallet" : "from-wallet"
                    )
                  }
                >
                  <img src={icon1} alt="" />
                </span>
                <span>
                  <div>
                    <span>From</span>
                    <span>
                      {fromTo === "from-wallet" ? "wallet" : "Game account"}
                    </span>
                  </div>

                  <div>
                    <span>To</span>
                    <span>
                      {fromTo !== "from-wallet" ? "wallet" : "Game account"}
                    </span>
                  </div>
                </span>
              </div>
              <div className={classes.amount}>
                <span>Amount</span>
                <input type="text" />
              </div>
            </div>
            <div>
              <button className={classes.btn}>Confirm</button>
            </div>
          </div>

          <div className={`${classes.card} ${classes.price}`}>
            <div className={classes.logo}>
              <img src={lyaLogo} alt="" width={50} height={50} />
              <span>
                <span>LYA Price</span>
                <span>$1.2</span>
              </span>
            </div>
            <div className={classes.chart}>
              <img src={chart} alt="" width={225} height={90} />
            </div>
            <div className={classes.marketCcap}>Market Cap: $12,500,000</div>
          </div>

          <div className={`${classes.card} ${classes.referral}`}>
            <div className={classes.content}>
              <div className={classes.ref}>Your referrals : 20</div>
              <div className={classes.reward}>
                <span>Rewards:</span>
                <span>20LYA</span>
              </div>
              <button className={classes.btn}>Claim</button>
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

      <div className={classes.nft}>
        <div className={classes.leftBtns}>
          <div className={classes.btnHeader}></div>
          <div className={classes.btns}>
            <button className={classes.btn}>vitalize</button>
            <button className={classes.btn}>stake</button>
            <button className={classes.btn}>Gift</button>
          </div>
        </div>

        <div className={classes.nftPocket}>
          <div className={classes.nftHeader}>NFT Pocket</div>
          <div className={classes.users}>
            <div className={classes.scrollSection}>
              {users.map((user, key) => (
                <div
                  key={key}
                  className={user.select ? classes.selected : ""}
                  onClick={() => toggleSelect(user.id)}
                >
                  <div className={classes.name}>#3256</div>
                  <div className={classes.img}>
                    <img src={userLogo} alt="" />
                  </div>
                  <div className={classes.userDesc}>
                    <span>age:45d</span> <span>mp:1</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={classes.stakingR}>
          <div className={classes.stakingHeader}>Staking Reward</div>
          <div>
            <div>Earn LYA by staking Squirrels</div>
            <div className={classes.claimBtn}>
              <p>240 LYA</p>
              <button className={classes.btn}>Claim</button>
            </div>
            <div>You will be rewarded 30 LYA per month</div>
            <div>Read the staking rules</div>
          </div>
        </div>

        <div className={classes.activities}>
          <div className={classes.activitesHeader}>
            <p>Activities</p>
            <button className={classes.btn}>Sort by</button>
          </div>
          <div className={classes.activitySection}>
            <p> #3445 staked on 4/8/2022</p>
            <p>login from new device</p>
            <p>climed 125 LYA as staking reward</p>
            <p>transfer 250 lya from g to w 3/7/2022</p>
            <p>#3456 Unstaked on 5/9/2022</p>
            <p>Earn 1 LYA per referral</p>
            <p>Earn 1 LYA per referral</p>
            <p>Earn 1 LYA per referral</p>
            <p>Earn 1 LYA per referral</p>
            <p>Earn 1 LYA per referral</p>
            <p>Earn 1 LYA per referral</p>
            <p>Earn 1 LYA per referral</p>
          </div>
        </div>
      </div>

      {/* <DashboardFooter/> */}
    </div>
  );
};

export default Dashboard;
