import icon1 from '../../assets/images/about_us_icon1.svg';
import icon2 from '../../assets/images/about_us_icon2.svg';
import icon3 from '../../assets/images/about_us_icon3.svg';
import profileImg1 from '../../assets/images/about_us_team_profile1.svg';
import profileImg2 from '../../assets/images/about_us_team_profile2.svg';
import profileImg3 from '../../assets/images/about_us_team_profile3.svg';
import backersBg from '../../assets/images/about_us_backer_bg.svg';
import teamBg from '../../assets/images/about_us_team_bg.svg';
import { BsQuestionCircle } from 'react-icons/bs';

import styles from './style.module.scss';

const AboutUs = () => {
  return (
    <div className={styles.abouteUs}>
      <div className={styles.aboutDesc}>
        <div className={styles.title}>About Us</div>
        <p className={styles.desc}>
          We, Huralya, are game creators; we build games based on your needs and
          styles. Our games WILL entertain you, WILL provide you income and WILL
          grant you great chances of investment. Our plans and goals will not be
          limited only into creating games. By combining the power of Blockchain
          and Web3, we are building an optimal and adaptive platform, specially
          built for developers to help them develop, publish and support their
          monetization system for their games.
        </p>
        <div className={styles.descIcons}>
          <span className={`${styles.item} ${item1}`}>
            <div className={styles.icon}>
              <img src={icon1} alt="" />
            </div>

            <div className={styles.desc}>
              Lorem ipsum dolor sit amet, doetetuer{' '}
            </div>
          </span>
          <span className={`${styles.item} ${item2}`}>
            <div className={styles.icon}>
              <img src={icon2} alt="" />
            </div>

            <div className={styles.desc}>
              Lorem ipsum dolor sit amet, doetetuer{' '}
            </div>
          </span>
          <span className={`${styles.item} ${item3}`}>
            <div className={styles.icon}>
              <img src={icon3} alt="" />
            </div>

            <div className={styles.desc}>
              Lorem ipsum dolor sit amet, doetetuer{' '}
            </div>
          </span>
          <span className={`${styles.item} ${item4}`}>
            <div className={styles.icon}>
              <img src={icon1} alt="" />
            </div>

            <div className={styles.desc}>
              Lorem ipsum dolor sit amet, doetetuer{' '}
            </div>
          </span>
          <span className={`${styles.item} ${item5}`}>
            <div className={styles.icon}>
              <img src={icon2} alt="" />
            </div>

            <div className={styles.desc}>
              Lorem ipsum dolor sit amet, doetetuer{' '}
            </div>
          </span>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.bottomTop}>
          <div className={styles.backers}>
            <img
              src={backersBg}
              alt=""
              className={styles.backersBg}
              width={820}
              height={150}
            />
            <div className={styles.content}>
              <div className={styles.top}>
                <div className={styles.title}>Our Backers</div>
                <div className={styles.help}>
                  To becpme a partner, Contact us{' '}
                  <BsQuestionCircle className={styles.qIcon} />
                </div>
              </div>
              <div className={styles.buttons}>
                <div className={styles.btns}>
                  <button className={styles.btn}>a16z</button>
                  <button className={styles.btn}>Ycombinator</button>
                  <button className={styles.btn}>binance labs</button>
                  <button className={styles.btn}>animaco brands</button>
                  <button className={styles.btn}>binance labs</button>
                </div>
                <div className={styles.smallBtns}>
                  <button className={`${styles.sBtn} ${left}`}></button>
                  <button className={`${styles.sBtn} ${right}`}></button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.team}>
            <img
              src={teamBg}
              alt=""
              className={styles.teamBg}
              width={210}
              height={150}
            />
            <div className={styles.title}>Our Team</div>
            <div className={styles.profile - img}>
              <img src={profileImg1} alt="" />
              <img src={profileImg2} alt="" />
              <img src={profileImg3} alt="" />
            </div>
            <div className={styles.smallBtns}>
              <button className={`${styles.sBtn} ${left}`}></button>
              <button className={`${styles.sBtn} ${right}`}></button>
            </div>
          </div>
        </div>
        <div className={styles.socials}>
          <div className={styles.btns}>
            <button className={styles.btn}>yahoo!</button>
            <button className={styles.btn}>coinMarketCap</button>
            <button className={styles.btn}>CoinDesk</button>
            <button className={styles.btn}>GAMERANK</button>
          </div>
          <div className={styles.smallBtns}>
            <button className={`${styles.sBtn} ${left}`}></button>
            <button className={`${styles.sBtn} ${right}`}></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
