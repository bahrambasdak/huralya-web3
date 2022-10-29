import { AiOutlinePlus } from "react-icons/ai";

const HuralyaSquirrel = ({ huralya_squirrel_left }) => {
  return (
    <div className="Huralya-Squirrel">
      {huralya_squirrel_left && (
        <img
          src={huralya_squirrel_left}
          alt=""
          className="background-img"
          width={850}
          height={480}
        />
      )}
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
              <input type="checkbox" className="checkbox" />
              <p className="text">
                <p>
                  The number of squirrels is limited by demand at the highest
                  price, and no new squirrels are created as demand decreases.
                  Even at peak demand, only 1,000 squirrels can be minted each
                  month
                </p>
                
              </p>
              <AiOutlinePlus className="icon" />
            </div>

            <div className="section">
              <div className="title">A useful pet in Genesis game</div>
              <input type="checkbox" className="checkbox" />
              <p className="text">
                <p>
                  Squirrels are cute and useful pets that can collect food on
                  your island
                </p>
                <AiOutlinePlus className="icon" />
              </p>
            </div>

            <div className="section">
              <div className="title">NFT staking </div>
              <input type="checkbox" className="checkbox" />
              <p className="text">
                <p>
                  You can get 10% profit per month (from minted price) by
                  staking nfts for up to one year. In the 10th month, you have a
                  valuable NFT that is risk free for you!!
                </p>
                <AiOutlinePlus className="icon" />
              </p>
            </div>

            <div className="section">
              <div className="title">DAO</div>
              <input type="checkbox" className="checkbox" />
              <p className="text">
                <p>
                  With each NFT you will have the right to vote in company
                  decisions - we have democracy
                </p>
                <AiOutlinePlus className="icon" />
              </p>
            </div>
            <div className="section">
              <div className="title">Airdrops</div>
              <input type="checkbox" className="checkbox" />
              <p className="text">
                <p>Holdings of NFTs may include airdrops in the future</p>
                <AiOutlinePlus className="icon" />
              </p>
            </div>
            <div className="section">
              <div className="title">Profile picture</div>
              <input type="checkbox" className="checkbox" />
              <p className="text">
                <p>
                  Each squirrel has a unique avatar that you can use as your
                  profile picture in our games
                </p>
                <AiOutlinePlus className="icon" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HuralyaSquirrel;
