import { useState } from 'react';
import { useCallback } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const AuthContext = createContext(undefined);

const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log({ e });
  }
};

const getLocalStorage = (key, initialValue) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    return initialValue;
  }
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    getLocalStorage('user', {
      connectBtn: 'notConnect',
      metamaskAddress: '',
      walletAddress: '',
      walletIsSuccess: false,
      metamaskIsSuccess: false
    })
  );

  useEffect(() => {
    setLocalStorage('user', user);
  }, [user]);


  const setConnectBtn = useCallback(
    (status) =>
      setUser((prev) => ({
        ...prev,
        connectBtn: status
      })),
    []
  );

  const setMetamaskWallet = useCallback(
    (address,isSuccess) =>
      setUser((prev) => ({
        ...prev,
        metamaskAddress: address,
        metamaskIsSuccess: isSuccess
      })),
    []
  );

  const setWalletAddress = useCallback(
    (address,isSuccess) =>
      setUser((prev) => ({
        ...prev,
        walletAddress: address,
        walletIsSuccess: isSuccess
      })),
    []
  );

  const DisconnectWallets = useCallback(
    () =>
      setUser((prev) => ({
        ...prev,
        connectBtn: 'notConnect',
        walletAddress: '',
        metamaskAddress: '',
        walletIsSuccess: false,
        metamaskIsSuccess: false
      })),
    []
  );

  const value = useMemo(
    () => ({
      setMetamaskWallet: setMetamaskWallet,
      setConnectBtn: setConnectBtn,
      setWalletAddress: setWalletAddress,
      DisconnectWallets:DisconnectWallets,
      user
    }),
    [setMetamaskWallet, setConnectBtn, setWalletAddress,DisconnectWallets, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error('useAuth must be within AuthProvider!');
  return context;
};

export { AuthProvider, useAuth };
