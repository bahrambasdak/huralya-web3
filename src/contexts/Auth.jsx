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

  const setMetamaskWallet = useCallback(
    (address) =>
      setUser((prev) => ({
        ...prev,
        metamaskAddress: address,
        metamaskIsSuccess: address!==''
      })),
    []
  );

  const setConnectBtn = useCallback(
    (status) =>
      setUser((prev) => ({
        ...prev,
        connectBtn: status
      })),
    []
  );

  const setWalletAddress = useCallback(
    (address) =>
      setUser((prev) => ({
        ...prev,
        walletAddress: address,
        walletIsSuccess: address!==''
      })),
    []
  );

  const value = useMemo(
    () => ({
      setMetamaskWallet: setMetamaskWallet,
      setConnectBtn: setConnectBtn,
      setWalletAddress: setWalletAddress,
      user
    }),
    [setMetamaskWallet, setConnectBtn, setWalletAddress, user]
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
