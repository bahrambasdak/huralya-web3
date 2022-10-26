import icon1 from "../img/about_us_icon1.svg";
import icon2 from "../img/about_us_icon2.svg";
import icon3 from "../img/about_us_icon3.svg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-desc">
        <div className="title">About Us</div>
        <p className="desc">
          We, Huralya, are game creators; we build games based on your needs and
          styles. Our games WILL entertain you, WILL provide you income and WILL
          grant you great chances of investment. Our plans and goals will not be
          limited only into creating games. By combining the power of Blockchain
          and Web3, we are building an optimal and adaptive platform, specially
          built for developers to help them develop, publish and support their
          monetization system for their games.
        </p>
        <div className="desc-icons">
          <span className="item item1">
            <div className="icon">
              <img src={icon1} alt="" />
            </div>

            <div className="desc">Lorem ipsum dolor sit amet, doetetuer </div>
          </span>
          <span className="item item2">
            <div className="icon">
              <img src={icon2} alt="" />
            </div>

            <div className="desc">Lorem ipsum dolor sit amet, doetetuer </div>
          </span>
          <span className="item item3">
            <div className="icon">
              <img src={icon3} alt="" />
            </div>

            <div className="desc">Lorem ipsum dolor sit amet, doetetuer </div>
          </span>
          <span className="item item4">
            <div className="icon">
              <img src={icon1} alt="" />
            </div>

            <div className="desc">Lorem ipsum dolor sit amet, doetetuer </div>
          </span>
          <span className="item item5">
            <div className="icon">
              <img src={icon2} alt="" />
            </div>

            <div className="desc">Lorem ipsum dolor sit amet, doetetuer </div>
          </span>
        </div>
      </div>

      <div className="bottom">
        <div className="bottom-top">
          <div className="backers">
            <div className="top">
              <div className="title">Our Backers</div>
              <div className="help">To becpme a partner, Contact us</div>
            </div>
            <div className="buttons">
              <div className="btns">
                <button>a16z</button>
                <button>Ycombinator</button>
                <button>binance labs</button>
                <button>animaco brands</button>
                <button>binance labs</button>
              </div>
              <div className="small-btn">
                <button></button>
                <button></button>
              </div>
            </div>
          </div>
          <div className="team">
            <div className="title">Our Team</div>
            <div className="profile-img">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
            <div className="small-btn">
              <button></button>
              <button></button>
            </div>
          </div>
        </div>
        <div className="socials">
          <div className="btns">
            <button>yahoo!</button>
            <button>coinMarketCap</button>
            <button>CoinDesk</button>
            <button>GAMERANK</button>
          </div>
          <div className="small-btn">
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
