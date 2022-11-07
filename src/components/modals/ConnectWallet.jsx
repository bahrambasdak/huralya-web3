import styles from "./styles.module.scss";
import { MdClose } from "react-icons/md";

const ConnectWalletModal = ({handleCloseModal}) => {

  return (
    <div className={styles.connectWalletModal}>
      <div className={styles.modalWrapper}>
        <div className={styles.modalContainer}>
          <div className={styles.modalBody}>
            <div className={styles.modalHeader}>Connect Wallet</div>
            <div className={styles.modalRes}>
              <div className={styles.col}>
                <button>
                  <div>icon</div>
                  <div>metamask</div>
                </button>
              </div>
              <div className={styles.col}>
                <button>
                  <div>icon</div>
                  <div>wallet Connect</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.modalCloseBtn}>
            <button onClick={handleCloseModal}><MdClose /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletModal;
//09105559718
