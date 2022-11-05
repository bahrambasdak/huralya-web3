import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsSdCardFill } from "react-icons/bs";
import InsigniaPageLeftBg from "./svgComponent/InsigniaPageLeftBg";

const HuralyaSquirrel = ({ huralya_squirrel_left, styles }) => {
  const [huralyaSquirrels, sethuralyaSquirrels] = useState([
    {
      id: 6,
      showText: true,
      title: "Squirrel supply",
      content:
        "Squirrels are cute and useful pets that can collect food on your island",
    },
    {
      id: 1,
      showText: true,
      title: "Squirrel supply",
      content:
        "Squirrels are cute and useful pets that can collect food on your island",
    },
    {
      id: 2,
      showText: false,
      title: "Squirrel supply",
      content:
        "Squirrels are cute and useful pets that can collect food on your island",
    },
    {
      id: 3,
      showText: false,
      title: "Squirrel supply",
      content:
        "Squirrels are cute and useful pets that can collect food on your island",
    },
    {
      id: 4,
      showText: false,
      title: "Squirrel supply",
      content:
        "Squirrels are cute and useful pets that can collect food on your island",
    },
  ]);

  const toggleSquirrel = (squirrelId) => {
    console.log(squirrelId);
    console.log(huralyaSquirrels[1].showText);
    sethuralyaSquirrels((prev) =>
      prev.map((squirrel) => {
        const squirrelShow = squirrel.showText;
        return {
          ...squirrel,
          showText: squirrel.id === squirrelId ? !squirrelShow : squirrelShow,
        };
      })
    );
  };

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
        <p className={styles.desc1}>
          Squirrel NFTs are a way to invest in Huralya
        </p>
        <p className={styles.desc2}>Learn more below...</p>

        <div className={styles.scrollableSection}>
          <div className={styles.scroll}>
            <div className={`${styles.section} ${styles.planSection}`}>
              <div className={styles.text}>
              <div className={styles.title}>Squirrel plan</div>
              <p className={styles.desc}>
                The mint price of Squirrel nfts increases by 100 lya every month
                , So most likely you can sell your nfts at a higher price every
                month
              </p>
              </div>
            </div>

            {huralyaSquirrels.map((item, key) => (
              <div className={styles.section} key={key}>
                <div className={styles.text}>
                  <div className={styles.title}>{item.title}</div>
                  <p className={styles.desc}>
                    {item.showText ? item.content : ""}
                  </p>
                </div>
                <div
                  className={styles.icon}
                  onClick={() => toggleSquirrel(item.id)}
                >
                  {!item.showText ? <AiOutlinePlus /> : <AiOutlineMinus />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HuralyaSquirrel;
