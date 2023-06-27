import profileImg1 from '../../assets/images/about_us_team_profile1.svg';
import profileImg2 from '../../assets/images/about_us_team_profile2.svg';
import profileImg3 from '../../assets/images/about_us_team_profile3.svg';
import { BsQuestionCircle } from 'react-icons/bs';
import styles from './style.module.scss';
import AboutUsBackersBg from '../../components/svgComponent/AboutUsBackersBg';
import AboutUsTeamBg from '../../components/svgComponent/AboutUsTeamBg';
import AboutUsDescIcon1 from '../../components/svgComponent/AboutUsDescIcon1';
import AboutUsDescIcon2 from '../../components/svgComponent/AboutUsDescIcon2';
import AboutUsDescIcon3 from '../../components/svgComponent/AboutUsDescIcon3';

const AboutUs = () => {
  return (
    <div className={styles.aboutUs} id="aboutusPage">
      <div id="aboutus" style={{ position: 'absolute', top: '-100px' }}></div>

      <div className={styles.aboutDesc}>
        <div className={styles.title}>About Us</div>
        <div className={styles.textDesc}>
          <p>
            We, Huralya, are game creators; we build games based on your needs
            and styles. Our games WILL entertain you, WILL provide you income
            and WILL grant you great chances of investment.
          </p>
          <p>
            Our plans and goals will not be limited only into creating games. By
            combining the power of Blockchain and Web3, we are building an
            optimal and adaptive platform, specially built for developers to
            help them develop, publish and support their monetization system for
            their games.
          </p>
        </div>
        <div className={styles.descIcons}>
          <span className={`${styles.item} ${styles.item1}`}>
            <div className={styles.icon}>
              <AboutUsDescIcon1 />
            </div>

            <div className={styles.desc}>
              Lorem ipsum dolor sit amet, doetetuer
            </div>
          </span>
          <span className={`${styles.item} ${styles.item2}`}>
            <div className={styles.icon}>
              <AboutUsDescIcon2 />
            </div>

            <div className={styles.desc}>
              Lorem ipsum dolor sit amet, doetetuer
            </div>
          </span>
          <span className={`${styles.item} ${styles.item3}`}>
            <div className={styles.icon}>
              <AboutUsDescIcon3 />
            </div>

            <div className={styles.desc}>
              Lorem ipsum dolor sit amet, doetetuer
            </div>
          </span>
          <span className={`${styles.item} ${styles.item4}`}>
            <div className={styles.icon}>
              <AboutUsDescIcon1 />
            </div>

            <div className={styles.desc}>
              Lorem ipsum dolor sit amet, doetetuer
            </div>
          </span>
          <span className={`${styles.item} ${styles.item5}`}>
            <div className={styles.icon}>
              <AboutUsDescIcon2 />
            </div>

            <div className={styles.desc}>
              Lorem ipsum dolor sit amet, doetetuer
            </div>
          </span>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.socials}>
          <div className={styles.btns}>
            <button className={styles.btn}>yahoo!</button>
            <button className={styles.btn}>coinMarketCap</button>
            <button className={styles.btn}>CoinDesk</button>
            <button className={styles.btn}>GAMERANK</button>
          </div>
          <div className={styles.smallBtns}>
            <button className={`${styles.sBtn} ${styles.left}`}></button>
            <button className={`${styles.sBtn} ${styles.right}`}></button>
          </div>
        </div>

        <div className={styles.ourBackerTeam}>
          <div className={styles.backers}>
            <AboutUsBackersBg
              className={styles.backersBg}
              width={907}
              height={163}
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
                  <button className={`${styles.sBtn} ${styles.left}`}></button>
                  <button className={`${styles.sBtn} ${styles.right}`}></button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.team}>
            <AboutUsTeamBg className={styles.teamBg} width={231} height={163} />

            <div className={styles.title}>Our Team</div>
            <div className={styles.profileImg}>
              <img src={profileImg1} alt="" width={50} height={50} />
              <img src={profileImg2} alt="" width={50} height={50} />
              <img src={profileImg3} alt="" width={50} height={50} />
            </div>
            <div className={styles.smallBtns}>
              <button className={`${styles.sBtn} ${styles.left}`}></button>
              <button className={`${styles.sBtn} ${styles.right}`}></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
