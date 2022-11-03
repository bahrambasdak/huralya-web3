import { AiOutlinePlus } from "react-icons/ai";
import InsigniaPageLeftBg from "./svgComponent/InsigniaPageLeftBg";

const HuralyaSquirrel = ({ huralya_squirrel_left , styles}) => {
  return (
    <div className={styles.HuralyaSquirrel}>
      {huralya_squirrel_left && (
        <img
          src={huralya_squirrel_left}
          alt=""
          className={styles.backgroundImg}
          width={850}
          height={480}
        />
      )}

      {/* <InsigniaPageLeftBg className="background-img"/> */}
      <div className={styles.content}>
        <h3 className={styles.title}>Huralya Squirrel</h3>
        <p className={styles.desc1}>Squirrel NFTs are a way to invest in Huralya</p>
        <p className={styles.desc2}>Learn more below...</p>

        <div className={styles.scrollableSection}>
          <div className={styles.scroll}>
            <div className={`${styles.section} ${styles.planSection}`} >
              <div className={styles.title}>Squirrel plan</div>
              <p className={styles.text}>
                The mint price of Squirrel nfts increases by 100 lya every month
                , So most likely you can sell your nfts at a higher price every
                month
              </p>
            </div>

            <div className={styles.section}>
              <div className={styles.title}>Squirrel supply</div>
              <input type="checkbox" className={styles.checkbox} />
              <p className={styles.text}>
                <p>
                  The number of squirrels is limited by demand at the highest
                  price, and no new squirrels are created as demand decreases.
                  Even at peak demand, only 1,000 squirrels can be minted each
                  month
                </p>
                
              </p>
              <AiOutlinePlus className={styles.icon} />
            </div>

            <div className={styles.section}>
              <div className={styles.title}>A useful pet in Genesis game</div>
              <input type="checkbox" className={styles.checkbox} />
              <p className={styles.text}>
                <p>
                  Squirrels are cute and useful pets that can collect food on
                  your island
                </p>
                <AiOutlinePlus className={styles.icon} />
              </p>
            </div>

            <div className={styles.section}>
              <div className={styles.title}>NFT staking </div>
              <input type="checkbox" className={styles.checkbox} />
              <p className={styles.text}>
                <p>
                  You can get 10% profit per month (from minted price) by
                  staking nfts for up to one year. In the 10th month, you have a
                  valuable NFT that is risk free for you!!
                </p>
                <AiOutlinePlus className={styles.icon}/>
              </p>
            </div>

            <div className={styles.section}>
              <div className={styles.title}>DAO</div>
              <input type="checkbox" className={styles.checkbox} />
              <p className={styles.text}>
                <p>
                  With each NFT you will have the right to vote in company
                  decisions - we have democracy
                </p>
                <AiOutlinePlus className={styles.icon}  />
              </p>
            </div>
            <div className={styles.section}>
              <div className={styles.title}>Airdrops</div>
              <input type="checkbox" className={styles.checkbox} />
              <p className={styles.text}>
                <p>Holdings of NFTs may include airdrops in the future</p>
                <AiOutlinePlus className={styles.icon} />
              </p>
            </div>
            <div className={styles.section}>
              <div className={styles.title}>Profile picture</div>
              <input type="checkbox" className={styles.checkbox} />
              <p className={styles.text}>
                <p>
                  Each squirrel has a unique avatar that you can use as your
                  profile picture in our games
                </p>
                <AiOutlinePlus className={styles.icon} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HuralyaSquirrel;
