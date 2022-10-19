import { BsGithub, BsTelegram, BsInstagram, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
    return ( <div className="footer">
        <div className="footer-links">
            <ul >
                <li className="link">Terms</li>
                <li className="link">Privacy</li>
                <li className="link">FAQ</li>
                <li className="link">WhitePaper</li>
            </ul>
        </div>
        <div className="social-icons">
            <ul>
                <li className="icon"><BsGithub/></li>
                <li className="icon"><BsTelegram/></li>
                <li className="icon"><BsInstagram/></li>
                <li className="icon"><BsWhatsapp/></li>
            </ul>
        </div>
        <div className="join">
            <button className="btn">Join Us</button>
        </div>
    </div> );
}
 
export default Footer;