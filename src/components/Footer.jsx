import {  BsWhatsapp } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <ul>
          <li className="link">TERMS</li>
          <li className="link">PRIVACY</li>
          <li className="link">FAQ</li>
          <li className="link">WHITEPAPER</li>
        </ul>
      </div>
      <div className="social-icons">
        <ul>
          <li className="icon">
            <ImFacebook />
          </li>
          <li className="icon">
            <AiOutlineTwitter />
          </li>

          <li className="icon">
            <BsWhatsapp />
          </li>
          <li className="icon">
            <FaLinkedinIn />
          </li>
        </ul>
      </div>
      <div className="join">
        <button className="btn">Join Us!</button>
      </div>
    </div>
  );
};

export default Footer;
