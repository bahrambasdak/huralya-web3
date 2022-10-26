import huralya_squirrel_left from "../img/insignia_page_left.svg";
import insignia_min from "../img/insignia_page_min.svg";
import insignia_supply from "../img/insignia_page_supply.svg";
import cat from "../img/insignia_page_cat.svg";
import { AiOutlineExclamationCircle, AiOutlinePlus } from "react-icons/ai";

const InsigniaNFT = () => {
  return (
    <div className="insigniaNFT-page">
      <div className="Huralya-Squirrel">
        {/* <img src={huralya_squirrel_left} alt="" className="background-img" /> */}
        <div className="content">
          <h3 className="title">Huralya Squirrel</h3>
          <p className="desc1">Squirrel NFTs are a way to invest in Huralya</p>
          <p className="desc2">Learn more below...</p>

          <div className="scrollable-section">
            <div className="scroll">
            <div className="section plan-section">
              <div className="title">Squirrel plan</div>
              <p className="text">
                The mint price of Squirrel nfts increases by 100 lya every month
                , So most likely you can sell your nfts at a higher price every
                month
              </p>
            </div>

            <div className="section">
              <div className="title">Squirrel supply</div>
              <p className="text">
                The number of squirrels is limited by demand at the highest
                price, and no new squirrels are created as demand decreases.
                Even at peak demand, only 1,000 squirrels can be minted each
                month
              
              <AiOutlinePlus className="icon" />
              </p>
            </div>

            <div className="section">
              <div className="title">A useful pet in Genesis game</div>
              <p className="text">
                Squirrels are cute and useful pets that can collect food on your
                island
             
              <AiOutlinePlus className="icon" />
              </p>
            </div>

            <div className="section">
              <div className="title">NFT staking </div>
              <p className="text">
                You can get 10% profit per month (from minted price) by staking
                nfts for up to one year. In the 10th month, you have a valuable
                NFT that is risk free for you!!
              
              <AiOutlinePlus className="icon" />
              </p>
            </div>

            <div className="section">
              <div className="title">DAO</div>
              <p className="text">
                With each NFT you will have the right to vote in company
                decisions - we have democracy
             
              <AiOutlinePlus className="icon" />
              </p>
            </div>
            <div className="section">
              <div className="title">Airdrops</div>
              <p className="text">
                Holdings of NFTs may include airdrops in the future
             
              <AiOutlinePlus className="icon" />
              </p>
            </div>
            <div className="section">
              <div className="title">Profile picture</div>
              <p className="text">
                Each squirrel has a unique avatar that you can use as your
                profile picture in our games
              
              <AiOutlinePlus className="icon" />
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="min">
        <img src={insignia_min} alt="" className="background-img" />
        <div className="content">
          <div className="cat-img">
            <img src={cat} alt="" />
          </div>
          <div className="bottoms">
            <button className="mint-btn">Mint</button>
            <button className="market-btn">Market place</button>
          </div>
          <p className="text">
            Upcoming MINT on Mars-21-2023
            <AiOutlineExclamationCircle className="icon" />
          </p>
        </div>
      </div>
      <div className="circulate-supply">
        <img src={insignia_supply} alt="" className="background-img" />
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
