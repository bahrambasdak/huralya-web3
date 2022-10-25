import huralya_squirrel_left from "../img/insignia_page_left.svg";
import insignia_min from "../img/insignia_page_min.svg";
import insignia_supply from "../img/insignia_page_supply.svg";
import cat from "../img/insignia_page_cat.svg";
import { AiOutlineExclamationCircle } from "react-icons/ai";


const InsigniaNFT = () => {
  return (
    <div className="insigniaNFT-page">
      <div className="Huralya-Squirrel">
        <img src={huralya_squirrel_left} alt="" />
    
      </div>

      <div className="min">
        <img src={insignia_min} alt="" className="background-img"/>
        <img src={cat} alt="" className="cat-img"/>
        <div>
          <button className="mint-btn">Mint</button>
          <button className="market-btn">Market place</button>
        </div>
        <p> Upcoming MINT on Mars-21-2023 
        <AiOutlineExclamationCircle/>
          
           </p>
      </div>
      <div className="circulate-supply">
        <img src={insignia_supply} alt="" className="background-img" />
        <div className="text1">
          <p>Circulating Supply</p>
          <p>1000</p>
        </div>

        <div>
          <div>
            <p>next mint price</p>
            <p>200 LYA</p>
          </div>
          <div></div>
        </div>

      </div>
    </div>
  );
};

export default InsigniaNFT;
