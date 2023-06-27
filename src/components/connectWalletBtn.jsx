import { useEffect } from 'react';
import { useAuth } from '../contexts/Auth';

const ConnecttBtn = ({ styles }) => {
  const { user, setConnectBtn, DisconnectWallets } =
    useAuth();
  const handleConnectBtn = () => {
    if (user.connectBtn === 'notConnect') setConnectBtn('connecting');
    else if (user.connectBtn === 'connected') DisconnectWallets();
  };

  const addressSturcture = (address) =>
    `[${address.substring(0, 3)}...${address.substring(address.length - 3)}]`;


  return (
    <div className={styles.connectBtn}>
      <div className={styles.walletAddress}>
        {user.metamaskIsSuccess && addressSturcture(user.metamaskAddress)}
        {user.walletIsSuccess && addressSturcture(user.walletAddress)}
      </div>
      <button onClick={handleConnectBtn} className={styles.btn}>
        {user.connectBtn === 'notConnect' ? 'connect Wallet' : 'connected'}
      </button>
    </div>
  );
};

export default ConnecttBtn;
