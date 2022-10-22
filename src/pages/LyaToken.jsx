import LyaTokenDescription from "../components/LyaTokenDescription";
import lya_icon1 from "../img/lya_icon1.svg";
import lya_icon2 from "../img/lya_icon2.svg";
import lya_icon3 from "../img/lya_icon3.svg";
//import d from "../img/d.svg";
import lyaLogo from "../img/lya_page_logo.svg";
const LyaTokenDescription1 = `All consumption of lya token is in the ecosystem and its printing and burning 
is done only based on supply and demand for users. The company's fundraising is only through 
the Insignia Collection, and ZERO LYA tokens will belong to the Huralya team.`;
const LyaTokenDescription2 = `Currently, it can only be purchased from within the Genesis 
game via the App Store and Google Play. Soon it will be possible to buy and sell tokens 
from any reputable crypto exchanges and you so can exchange them with any common 
cryptocurrencies such as BTC, ETH, USDT or …
`;

const LyaTokenDescription3 = `LYA, the currency token in hualya game ecosystems. 
All user’s transactions, expenses and income will be covered by this coin.`

const LyaToken = () => {
  return (
    <div className="lyatoken-page">
      <div className="top">
        <div className="exchanges card">
          <div className="title">Exchanges</div>
          <div className="exchange">
            <button className="btn">Kucoin</button>
            <button className="btn">MEXC</button>
            <button className="btn">uniswap</button>
            <button className="btn">pancakeswap</button>
          </div>
        </div>
        <div className="contract-address card">
          <div className="title">Contract Address</div>
          <div className="contract">
            <button className="btn">Ethereum</button>
            <button className="btn">SmartChain</button>
          </div>
        </div>

        <div className="logo card">
          <img src={lyaLogo} alt="lya_page_logo" />
        </div>
      </div>
      <div className="content card">
        <LyaTokenDescription
          icon={lya_icon1}
          title="Allocation and release"
          text={LyaTokenDescription1}
        />
        <LyaTokenDescription
          icon={lya_icon2}
          title="how to buy and sell"
          text={LyaTokenDescription2}
        />
        <LyaTokenDescription
          icon={lya_icon3}
          title="Token Usage"
          text={LyaTokenDescription3}
        />
      </div>
    </div>
  );
};

export default LyaToken;
