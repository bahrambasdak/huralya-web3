import android_icon from '../../assets/images/genesis_android_icon.svg';
import apple_icon from '../../assets/images/genesis_apple_icon.svg';
import GenesisBgSvg from '../../components/svgComponent/GenesisBgSvg';
import styles from './style.module.scss';
import GenesisWatchBtn from '../../components/svgComponent/GenesisWatchBtn';
import GenesisIconBg from '../../components/svgComponent/GenesisIconBg';
import GenesisLogo from '../../components/svgComponent/GenesisLogo';
import GenesisExplorBtn from '../../components/svgComponent/GenesisExploreBtn';


const Genesis = () => {

  return (
    <div className={styles.genesisPage}>
      <div id="genesis" style={{ position: 'absolute', top: '-100px' }}></div>
      <div className={styles.backgroundImg}>
        <GenesisBgSvg />
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.icons}>
            <GenesisIconBg
              className={styles.iconsBg}
              width={110}
              height={205}
            />
            <img
              src={android_icon}
              alt=""
              className={styles.androidIcon}
              width={55}
              height={55}
            />
            <img
              src={apple_icon}
              alt=""
              className={styles.appleIcon}
              width={55}
              height={55}
            />
          </div>
        </div>

        <div className={styles.center}>
          <GenesisWatchBtn className={styles.watchBtn} />
          <div className={styles.title}>
            <p className={styles.text}>
              The first creation of
              <span className={styles.textRight}>
                <GenesisLogo width={80} height={55} className={styles.img} />
                <p>Huralya</p>
              </span>
            </p>

            <div className={styles.exploreBtn}>
              <button>
                Explore the genesis
                <GenesisExplorBtn
                  width={48}
                  height={31}
                  className={styles.exlogo}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genesis;
