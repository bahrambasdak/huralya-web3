import LyaTokenDescription from '../../components/LyaTokenDescription';
import lya_icon1 from '../../assets/images/lya_icon1.svg';
import lya_icon2 from '../../assets/images/lya_icon2.svg';
import lya_icon3 from '../../assets/images/lya_icon3.svg';
import metamask_icon from '../../assets/images/metamask_icon.svg';
import { FiCopy } from 'react-icons/fi';
//import d from "../img/d.svg";
import lyaLogo from '../../assets/images/lya_page_logo.svg';
import LyaTokenLogo from '../../components/svgComponent/LyaTokenLogo';
// import LyaIcon1 from "../components/svgComponent/LyaIcon1";
// import LyaIcon2 from "../components/svgComponent/LyaIcon2";
// import LyaIcon3 from "../components/svgComponent/LyaIcon3";
import styles from './style.module.scss';

const LyaTokenDescription1 = `All consumption of lya token is in the ecosystem and its printing and burning 
is done only based on supply and demand for users. The company's fundraising is only through 
the Insignia Collection, and ZERO LYA tokens will belong to the Huralya team.`;
const LyaTokenDescription2 = `Currently, it can only be purchased from within the Genesis 
game via the App Store and Google Play. Soon it will be possible to buy and sell tokens 
from any reputable crypto exchanges and you so can exchange them with any common 
cryptocurrencies such as BTC, ETH, USDT or …
`;

const LyaTokenDescription3 = `LYA, the currency token in hualya game ecosystems. 
All user’s transactions, expenses and income will be covered by this coin.`;
const ethereumAddress = '0x3F162087420604ebBaa03eD048D8a8709De78923';

const LyaToken = () => {
  const addressCopy = () => {
    navigator.clipboard.writeText(ethereumAddress);
  };
  return (
    <div className={styles.lyatokenPage}>
      <div  id="lyatoken" style={{ position: 'absolute', top: '-100px' }}></div>

      <div className={`${styles.content}`}>
        <div className={`${styles.lyaPageLogo}`}>
          <div className={styles.logoContent}>
            <div>THE</div>
            <div className={styles.logo}>
              <LyaTokenLogo width={100} height={50} />
            </div>
          </div>
        </div>

        <div className={styles.lyaPageDesc}>
          <LyaTokenDescription
            title="Allocation and release"
            text={LyaTokenDescription1}
            styles={styles}
          />

          <LyaTokenDescription
            title="Token Usage"
            text={LyaTokenDescription3}
            styles={styles}
          />

          <LyaTokenDescription
            title="how to buy and sell"
            text={LyaTokenDescription2}
            styles={styles}
          />
        </div>

        <div className={`${styles.lyaPageAddress} ${styles.card}`}>
          <div className={styles.contractAddress}>
            <div className={styles.title}>Contract Address</div>
            <div className={styles.contract}>
              <div className={styles.ethereum}>
                <button className={styles.btn}>polygan</button>
                <span className={styles.etherHover}>
                  <div>
                    <p>{ethereumAddress}</p>
                    <div className={styles.icons}>
                      <FiCopy
                        onClick={addressCopy}
                        className={styles.copyIcon}
                      />
                      <img src={metamask_icon} alt="metamask_icon" />
                    </div>
                  </div>
                </span>
              </div>

              <div className={styles.smartchain}>
                <button className={styles.btn}>SmartChain</button>
              </div>
            </div>
          </div>

          <div className={`${styles.exchanges} ${styles.card}`}>
            <div className={styles.title}>Exchanges</div>
            <div className={styles.exchange}>
              <button className={styles.btn}>Kucoin</button>
              <button className={styles.btn}>uniswap</button>
              <button className={`${styles.btn} ${styles.pancakeswap}`}>
                pancakeswap
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LyaToken;
