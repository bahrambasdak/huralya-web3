import { useAuth } from '../contexts/Auth';

const ConnectWalletBtn = ({  styles }) => {
  const { authState, setAuthState } = useAuth();

  return (
    <div>
      <button
      
        onClick={() =>
          setAuthState((prev) => ({ ...prev, connectWalletBtn: 'connecting' }))
        }
        className={styles.btn}>
        {authState.connectWalletBtn==='connecting' ? '...connecting' : 'connect Wallet'}
      </button>
    </div>
  );
};

export default ConnectWalletBtn;
