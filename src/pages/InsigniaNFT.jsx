import huralya_squirrel_left from "../img/insignia_page_left.svg";
import insignia_min from "../img/insignia_page_min.svg";
import insignia_supply from "../img/insignia_page_supply.svg";
import cat from "../img/insignia_page_cat.svg";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import HuralyaSquirrel from "../components/HuralyaSquirrel";

const InsigniaNFT = () => {
  return (
    <div className="insigniaNFT-page">
      <div className="min">
        <img
          src={insignia_min}
          alt=""
          className="background-img"
          width={270}
          height={310}
        />
        <div className="content">
          <div className="cat-img">
            <img src={cat} alt="" width={200} height={200} />
          </div>
          <div className="bottoms">
            <button className="mint-btn btn">Mint</button>
            <button className="market-btn btn">Market place</button>
          </div>
          <p className="text">
            Upcoming MINT on Mars-21-2023
            <AiOutlineExclamationCircle className="icon" />
          </p>
        </div>
      </div>

      <HuralyaSquirrel huralya_squirrel_left={huralya_squirrel_left}/>

      <div className="circulate-supply">
        <img
          src={insignia_supply}
          alt=""
          className="background-img"
          width={235}
          height={170}
        />
        <div className="content">
          <div className="text1">
            <div>
              <p>Circulating Supply</p>
              <p>1000</p>
            </div>
          </div>

          <div>
            <div>
              <p>next mint price</p>
              <p>200 LYA</p>
            </div>
            <div>
              <p>Mrket floor price</p>
              <p>250 LYA</p>
            </div>
          </div>

          <div>
            <div>
              <p>Blockchain :</p>
              <p>Ethereum</p>
            </div>
            <div>
              <p> Address :</p>
              <p>0x60e...a7c6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsigniaNFT;
