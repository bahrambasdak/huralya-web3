import huralya_squirrel_left from "../img/insignia_page_left.svg";
import insignia_min from "../img/insignia_page_min.svg";
import insignia_supply from "../img/insignia_page_supply.svg";

const InsigniaNFT = () => {
  return (
    <div className="insigniaNFT-page">
      <div className="Huralya-Squirrel">
        <img src={huralya_squirrel_left} alt="" />
      </div>
      <div className="right">
        <div className="min">
          <img src={insignia_min} alt="" />
        </div>
        <div className="circulate-supply">
          <img src={insignia_supply} alt="" />
        </div>
      </div>
    </div>
  );
};

export default InsigniaNFT;
