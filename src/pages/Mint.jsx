import HuralyaSquirrel from "../components/HuralyaSquirrel";
import catImg from "../img/mintPageCatImg.svg";
import mintBar from "../img/mintPagbar.svg";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const Mint = () => {
  return (
    <div className="mint">
      <HuralyaSquirrel />
      <div className="buy-sell">
        <img src={catImg} alt="" className="cat-img" width={270} height={270} />
        <div className="desc">
          <div className="total">
            <p>Total supply : 1200</p>
            <p>mint level : 3</p>
            <p>Mint price : 300 LYA</p>
          </div>
          <div className="last">
            <p>last price was 200 LYA</p>
          </div>
        </div>
        <div className="bar">
          <img src={mintBar} alt="" />
        </div>
        <div className="date">
          <p><AiOutlineExclamationCircle className="icon"/>Upcoming mint on 21 nov 2021 at price 400</p>
        </div>
        <div className="buy-sell-lya">Buy/Sell LYA</div>
      </div>
    </div>
  );
};

export default Mint;
