import huralya_squirrel_left from '../../assets/images/insignia_page_left.svg';
import insignia_min from '../../assets/images/insignia_page_min.svg';
import insignia_supply from '../../assets/images/insignia_page_supply.svg';
import cat from '../../assets/images/insignia_page_cat.svg';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import HuralyaSquirrel from '../../components/HuralyaSquirrel';
import styles from './style.module.scss';

const InsigniaNFT = () => {
  return (
    <div className={styles.insigniaNFTPage}>
      <div id="insignia" style={{ position: 'absolute', top: '-100px' }}></div>

      <div className={styles.min}>
        <img
          src={insignia_min}
          alt=""
          className={styles.backgroundImg}
          width={270}
          height={310}
        />
        <div className={styles.content}>
          <div className={styles.catImg}>
            <img src={cat} alt="" width={200} height={200} />
          </div>
          <div className={styles.bottoms}>
            <button className={`${styles.mintBtn} ${styles.btn}`}>Mint</button>
            <button className={`${styles.marketBtn} ${styles.btn}`}>
              Market place
            </button>
          </div>
          <p className={styles.text}>
            Upcoming MINT on Mars-21-2023
            <AiOutlineExclamationCircle className={styles.icon} />
          </p>
        </div>
      </div>

      <HuralyaSquirrel
        huralya_squirrel_left={huralya_squirrel_left}
        styles={styles}
      />

      <div className={styles.circulateSupply}>
        <img
          src={insignia_supply}
          alt=""
          className={styles.backgroundImg}
          width={235}
          height={170}
        />
        <div className={styles.content}>
          <div className={styles.text1}>
            <div>
              <p>Circulating Supply</p>
              <p>1000</p>
            </div>
          </div>

          <div>
            <div>
              <p>next mint price</p>
              <p>200 LYA</p>
            </div>
            <div>
              <p>Mrket floor price</p>
              <p>250 LYA</p>
            </div>
          </div>

          <div>
            <div>
              <p>Blockchain :</p>
              <p>Ethereum</p>
            </div>
            <div>
              <p> Address :</p>
              <p>0x60e...a7c6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsigniaNFT;
