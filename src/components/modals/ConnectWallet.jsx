import styles from './styles.module.scss';
import { MdClose } from 'react-icons/md';
import { wallets } from '../../libs';
import { useEffect, useState } from 'react';

import WalletConnect from '@walletconnect/client';
import QRCodeModal from '@walletconnect/qrcode-modal';
import { useAuth } from '../../contexts/Auth';
import Loading from './loading';

const ConnectWalletModal = () => {
  const [provider, setProvider] = useState({});
  const { setMetamaskWallet, setConnectBtn, setWalletAddress, user } =
    useAuth();
  const [metamaskBtnStatus, setMetamaskBtnStatus] = useState('notConnect');
  const [walletConnectBtnStatus, setWalletConnectBtnStatus] =
    useState('notConnect');
  useEffect(() => {
    setProvider(window.ethereum);
  }, []);

  const addressSturcture = (address) =>
    `${address.substring(0, 3)}...${address.substring(address.length - 3)}`;

  const walletConnect = () => {
    setWalletConnectBtnStatus('connecting');
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
      setWalletAddress(data.address[0]);
      setConnectBtn('connected');
      setWalletConnectBtnStatus('connected');
      console.log(data.address);
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

  const handleMetaMaskWallet = () => {
    const metaMask = new wallets.metaMask.default(provider);
    setMetamaskBtnStatus('connecting');
    console.log(metamaskBtnStatus);
    return metaMask
      .onClickConnect()
      .then((r) => {
        console.log(r);
        console.log(addressSturcture(r.address));
        setMetamaskBtnStatus('connected');
        setMetamaskWallet(r.address);
        setConnectBtn('connected');
        return r;
      })
      .catch((e) => {
        console.log(e);
        setMetamaskBtnStatus('notConnect');
        setConnectBtn('notConnect');
        setMetamaskWallet('');
        return e;
      });
  };

  const handleWalletConnect = () => {
    return walletConnect();
  };

  useEffect(() => {
    //console.log('handlconnectwallet', handleWalletConnect());
    //console.log('walletconnect', walletConnect());
    // console.log('handlemetamask', handleMetaMaskWallet());
  }, [handleWalletConnect, walletConnect]);

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
                  <div>
                    metamask
                  </div>
                  {metamaskBtnStatus === 'connecting' && (
                      <Loading type={'spin'} color={'#FFFFF'} />
                    )}
                </button>
              </div>
              <div className={styles.col}>
                <button onClick={handleWalletConnect} >
                  <div>icon</div>
                  <div>
                    wallet Connect
                  </div>
                  {walletConnectBtnStatus === 'connecting' && (
                      <Loading type={'spin'} color={'#FFFFF'} />
                    )}
                </button>
              </div>
            </div>
          </div>
          <div className={styles.modalCloseBtn}>
            <button onClick={() => setConnectBtn('notConnect')}>
              <MdClose />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletModal;
