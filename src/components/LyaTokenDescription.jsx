
const LyaTokenDescription = ({ title, text, styles }) => {
  return (
    <div className={styles.LyaTokenDescription}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default LyaTokenDescription;
