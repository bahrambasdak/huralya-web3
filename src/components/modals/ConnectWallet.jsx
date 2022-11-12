import styles from './styles.module.scss';
import { MdClose } from 'react-icons/md';
import { wallets } from '../../libs';
import { useEffect, useState } from 'react';
import WalletConnect from '@walletconnect/client';
import QRCodeModal from '@walletconnect/qrcode-modal';
import { useAuth } from '../../contexts/Auth';
import Loading from './loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConnectWalletModal = () => {
  const [provider, setProvider] = useState({});
  const { setMetamaskWallet, setConnectBtn, setWalletAddress, user } =
    useAuth();

  const [metamaskBtnStatus, setMetamaskBtnStatus] = useState('notConnect');
  const [walletConnectBtnStatus, setWalletConnectBtnStatus] =
    useState('notConnect');

  const addressSturcture = (address) =>
    `${address.substring(0, 3)}...${address.substring(address.length - 3)}`;

  const notify = (text) => toast(text);




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
      console.log(data);
      if(data.isSuccess){
        setWalletAddress(data.address[0].toString(), data.isSuccess);
        setConnectBtn('connected');
        setWalletConnectBtnStatus('connected');
        console.log(data.address[0].toString(), data.isSuccess);
        notify('wallet connected is sucsses');
      }

    });

    connector.on('session_update', (error, payload) => {
      if (error) {
        throw error;
      }
      const { accounts, chainId } = payload.params[0];
      const data = { isSuccess: true, address: [accounts] };
      if (data.isSuccess) {
        setWalletAddress(data.address[0].toString(), data.isSuccess);
        setConnectBtn('connected');
        console.log(data.address[0].toString(), data.isSuccess);
      
      }
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
       if(r.isSuccess) console.log(addressSturcture(r.address));
        if (r.isSuccess) {
          setMetamaskBtnStatus('connected');
          setMetamaskWallet(r.address.toString(), r.isSuccess);
          setConnectBtn('connected');
        } else {
          
          setMetamaskBtnStatus('notConnect');
        }
        notify(r.message);
        return r;
      })
      .catch((e) => {
        console.log( e);
        setMetamaskBtnStatus('notConnect');
        notify(e.message);
        return e;
      });
  };

  const handleWalletConnect = () => {
    return walletConnect();
  };

  useEffect(() => {
    setProvider(window.ethereum);
  }, []);

  return (
    <div className={styles.connectWalletModal}>
      <div className={styles.modalWrapper}>
        <div className={styles.modalContainer}>
          <div className={styles.modalBody}>
            <ToastContainer />
            <div className={styles.modalHeader}>Connect Wallet</div>
            <div className={styles.modalRes}>
              <div className={styles.col}>
                <button onClick={handleMetaMaskWallet}>
                  <div>icon</div>
                  <div>metamask</div>
                  {metamaskBtnStatus === 'connecting' && (
                    <Loading type={'spin'} color={'#FFFFF'} />
                  )}
                </button>
              </div>
              <div className={styles.col}>
                <button onClick={handleWalletConnect}>
                  <div>icon</div>
                  <div>wallet Connect</div>
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
