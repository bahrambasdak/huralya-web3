import HuralyaSquirrel from '../../../components/HuralyaSquirrel';
import catImg from '../../../assets/images/mintPageCatImg.svg';
import mintBar from '../../../assets/images/mintPagbar.svg';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import styles from './style.module.scss';

const Mint = () => {
  return (
    <div className={styles.mint}>
      <div id="mint" style={{ position: 'absolute', top: '-100px' }}></div>

      <HuralyaSquirrel styles={styles} />
      <div className={styles.buySell}>
        <img
          src={catImg}
          alt=""
          className={styles.catImg}
          width={270}
          height={270}
        />
        <div className={styles.desc}>
          <div className={styles.total}>
            <p>Total supply : 1200</p>
            <p>mint level : 3</p>
            <p>Mint price : 300 LYA</p>
          </div>
          <div className={styles.last}>
            <p>last price was 200 LYA</p>
          </div>
        </div>
        <div className={styles.bar}>
          <img src={mintBar} alt="" />
        </div>
        <div className={styles.date}>
          <p>
            <AiOutlineExclamationCircle className={styles.icon} />
            Upcoming mint on 21 nov 2021 at price 400
          </p>
        </div>
        <div className={styles.buySellLya}>Buy/Sell LYA</div>
      </div>
    </div>
  );
};

export default Mint;
