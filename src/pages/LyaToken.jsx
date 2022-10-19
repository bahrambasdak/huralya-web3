import LyaTokenDescription from "../components/LyaTokenDescription";
import content_icon1 from "../img/lyaicon1.JPG";
import content_icon2 from "../img/lyaicon2.JPG";
import content_icon3 from "../img/lyaicon3.JPG";
import lyaLogo from "../img/lyaLogo.JPG";
const lorem10 =
  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, sed!`;
const lorem20 = `Lorem ipsum dolor sit amet consectetur, adipisicing elit
. Quidem exercitationem unde aliquid eligendi dicta non, nobis sed quam repellat incidunt.
. Quidem exercitationem unde aliquid eligendi dicta non, nobis sed quam repellat incidunt.
. Quidem exercitationem unde aliquid eligendi dicta non, nobis sed quam repellat incidunt.
`;

const LyaToken = () => {
  return (
    <div className="lyatoken-page">
      <div className="top">
        <div className="exchanges card">
          <div className="title">exchanges</div>
          <div className="exchange">
            <button className="btn">Kucoin</button>
            <button className="btn">MEXC</button>
            <button className="btn">uniswap</button>
            <button className="btn">pancakeswap</button>
          </div>
        </div>
        <div className="contract-address card">
          <div className="title">contract address</div>
          <div className="contract">
            <button className="btn">Ethereum</button>
            <button className="btn">SmartChain</button>
          </div>
        </div>

        <div className="logo card">
          <img src={lyaLogo} alt="lyaLogo" />
        </div>
      </div>
      <div className="content card">
        <LyaTokenDescription
          icon={content_icon1}
          title="Allocation and release"
          text={lorem20}
        />
        <LyaTokenDescription
          icon={content_icon2}
          title="how to buy and sell"
          text={lorem20}
        />
        <LyaTokenDescription
          icon={content_icon3}
          title="Token Usage"
          text={lorem10}
        />
      </div>
    </div>
  );
};

export default LyaToken;
