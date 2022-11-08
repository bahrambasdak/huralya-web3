import styles from './styles.module.scss';
import { MdClose } from 'react-icons/md';
import { wallets } from '../../libs';
import { useEffect, useState } from 'react';

import WalletConnect from '@walletconnect/client';
import QRCodeModal from '@walletconnect/qrcode-modal';

const walletConnect = () => {
  const connector = new WalletConnect({
    bridge: 'https://bridge.walletconnect.org',
    qrcodeModal: QRCodeModal
  });

  if (!connector.connected) {
    connector.createSession();
  }

  connector.on('connect', (error, payload) => {
    if (error) {
      throw error;
    }

    const { accounts, chainId } = payload.params[0];
    const data = { isSuccess: true, address: [accounts] };
  });

  connector.on('session_update', (error, payload) => {
    if (error) {
      throw error;
    }
    const { accounts, chainId } = payload.params[0];
    const data = { isSuccess: true, address: [accounts] };
  });

  connector.on('disconnect', (error, payload) => {
    if (error) {
      throw error;
    }
  });
};

const ConnectWalletModal = ({ handleCloseModal }) => {
  const [provider, setProvider] = useState({});
  useEffect(() => {
    setProvider(window.ethereum);
  }, []);

  const addressSturcture = (address) =>
    `${address.substring(0, 3)}...${address.substring(address.length - 3)}`;

  const handleMetaMaskWallet = () => {
    const metaMask = new wallets.metaMask.default(provider);
    return metaMask
      .onClickConnect()
      .then((r) => {
        console.log(r);
        console.log(addressSturcture(r.address));
        return r;
      })
      .catch((e) => {
        console.log(e);
        return e;
      });
  };

  const handleWalletConnect = () => {
    return walletConnect();
  };

  return (
    <div className={styles.connectWalletModal}>
      <div className={styles.modalWrapper}>
        <div className={styles.modalContainer}>
          <div className={styles.modalBody}>
            <div className={styles.modalHeader}>Connect Wallet</div>
            <div className={styles.modalRes}>
              <div className={styles.col}>
                <button onClick={handleMetaMaskWallet}>
                  <div>icon</div>
                  <div>metamask</div>
                </button>
              </div>
              <div className={styles.col}>
                <button onClick={handleWalletConnect}>
                  <div>icon</div>
                  <div>wallet Connect</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.modalCloseBtn}>
            <button onClick={handleCloseModal}>
              <MdClose />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletModal;
//09105559718
