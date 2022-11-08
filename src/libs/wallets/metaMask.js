import Web3 from 'web3';
const AbiCoder = require('web3-eth-abi');

const toFixed = (x) => {
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split('e-')[1]);
    if (e) {
      x *= Math.pow(10, e - 1);
      x = '0.' + new Array(e).join('0') + x.toString().substring(2);
    }
  } else {
    var e = parseInt(x.toString().split('+')[1]);
    if (e > 20) {
      e -= 20;
      x /= Math.pow(10, e);
      x += new Array(e + 1).join('0');
    }
  }
  return x;
};

class MetaMask {
  constructor(ethereum) {
    this.ethereum = ethereum;
    this.flashbotUrl = 'https://relay.flashbots.net';
    this.web3Endpoint =
      'https://eth.getblock.io/mainnet/?api_key=91953f06-fc0a-4a48-87fc-145e8cf6d385';
    this.web3 = new Web3(this.web3Endpoint);
  }

  #isMetaMaskInstalled = () => {
    return Boolean(this.ethereum && this.ethereum.isMetaMask);
  };
  #isMetaMaskInstalledLocally = (ethereum) => {
    return Boolean(ethereum && ethereum.isMetaMask);
  };
  getBalance = async (address) => {
    try {
      const web3 = new Web3(this.web3Endpoint);
      const resBalance = await web3.eth.getBalance(address);
      return { status: 200, content: { balance: resBalance } };
    } catch (e) {
      return { status: 400, content: { message: e.message } };
    }
  };

  calculateEtherValue = async (
    value,
    maxFeePerGas,
    maxPriorityFeePerGas,
    gasLimit
  ) => {
    const etherValue = toFixed(
      parseInt(gasLimit) * parseFloat(maxFeePerGas / 1e9) +
        parseFloat(maxPriorityFeePerGas / 1e9) +
        parseFloat(value)
    );

    const rounding = parseFloat(
      parseFloat(String(etherValue)).toFixed(3).replace(/0+$/, '') + 0.001
    );

    return rounding;
  };

  estimateGas = async (
    fromAddress,
    contractAddress,
    data,
    value,
    maxFeePerGas,
    maxPriorityFeePerGas
  ) => {
    try {
      const web3 = new Web3(this.web3Endpoint);
      const gasEstimate = await web3.eth.estimateGas({
        from: fromAddress,
        to: contractAddress,
        value: web3.utils.toHex(
          web3.utils.toWei(Number(value).toString(), 'ether')
        ),
        data: data,
        maxFeePerGas: web3.utils.toHex(
          web3.utils.toWei(Number(maxFeePerGas).toString(), 'gwei')
        ),
        maxPriorityFeePerGas: web3.utils.toHex(
          web3.utils.toWei(Number(maxPriorityFeePerGas).toString(), 'gwei')
        )
      });

      if (String(gasEstimate).toLowerCase().includes('revert'))
        return { status: 200, content: { result: false } };

      return { status: 200, content: { result: true } };
    } catch (e) {
      const RETURN_DATA = ['supply', 'insufficient', 'value', 'limit'];
      if (
        String(e.message).toLowerCase().includes('value') ||
        String(e.message).toLowerCase().includes('incorrect') ||
        String(e.message).toLowerCase().includes('limit') ||
        String(e.message).toLowerCase().includes('incorrect ')
      ) {
        return {
          status: 400,
          content: { message: e.message }
        };
      }
      if (String(e.message).toLowerCase().includes(RETURN_DATA)) {
        return {
          status: 400,
          content: { message: e.message }
        };
      }
      if (String(e.message).toLowerCase().includes('revert')) {
        return { status: 200, content: { result: false } };
      }
      return {
        status: 400,
        content: { message: e.message }
      };
    }
  };

  onLoadConnect = async (ethereum) => {
    try {
      if (this.#isMetaMaskInstalledLocally(ethereum)) {
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        const ethereumAddress = accounts[0];

        if (String(ethereumAddress).includes('0x')) return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  #addChain = () => {
    return this.ethereum
      .request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: this.web3.utils.toHex('137'),
            chainName: 'Polygon',
            nativeCurrency: {
              name: 'MATIC',
              symbol: 'MATIC',
              decimals: 18
            },
            rpcUrls: ['https://polygon-rpc.com'],
            blockExplorerUrls: ['https://www.polygonscan.com']
          }
        ]
      })
      .then(() => {
        return { isSuccess: true, message: 'chain added' };
      })
      .catch(() => {
        return { isSuccess: false, message: 'could not add network' };
      });
  };

  #changeChain = () => {
    return this.ethereum
      .request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: this.web3.utils.toHex('137') }]
      })
      .then(() => {
        return { isSuccess: true, message: 'network has been set' };
      })
      .catch((e) => {
        if (e.code === 4902)
          return {
            isSuccess: true,
            message: 'network is not available, add it'
          };

        return { isSuccess: true, message: 'could not set network' };
      });
  };

  onClickConnect = async () => {
    try {
      if (this.#isMetaMaskInstalled()) {
        await this.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await this.ethereum.request({
          method: 'eth_accounts'
        });

        const rAddChain = await this.#addChain();
        if (!rAddChain?.isSuccess) throw new Error(rAddChain?.message);

        const rChangeChain = await this.#changeChain();
        if (!rChangeChain.isSuccess) throw new Error(rChangeChain?.message);

        const ethereumAddress = accounts[0];
        return { isSuccess: true, address: ethereumAddress };
      }
      return {
        isSuccess: false,
        message: 'MetaMask Not Found ! \n Please Install MetaMask'
      };
    } catch (e) {
      return {
        isSuccess: false,
        message: e.message
      };
    }
  };
}

export default MetaMask;
