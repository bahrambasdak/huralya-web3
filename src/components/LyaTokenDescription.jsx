import LyaIcon1 from './svgComponent/LyaIcon2';
//import LyaIcon2 from "./svgComponent/LyaIcon2";

const LyaTokenDescription = ({ title, icon, text, styles }) => {
  return (
    <div className={styles.LyaTokenDescription}>
      <div className={styles.icon}>
        <img src={icon} alt="" width={100} height={70} />
        {/* {icon} */}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default LyaTokenDescription;
