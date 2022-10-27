const LyaTokenDescription = ({ title, icon, text }) => {
  return (
    <div className="LyaTokenDescription">
      <div className="icon">
        <img src={icon} alt="" width={100} height={70}/>
      </div>
      <h3 className="title">{title}</h3>
      <p className="text">{text}</p>
    </div>
  );
};

export default LyaTokenDescription;
