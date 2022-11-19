import { BsWhatsapp } from 'react-icons/bs';
import { ImFacebook } from 'react-icons/im';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineReddit } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

import { BsDiscord } from 'react-icons/bs';

import styles from '../styles/App.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <ul>
            <li className={styles.link}>TERMS</li>
            <li className={styles.link}>PRIVACY</li>
            <li className={styles.link}>FAQ</li>
            <li className={styles.link}>WHITEPAPER</li>
          </ul>
        </div>
        <div className={styles.socialIcons}>
          <ul>
            <li className={styles.icon}>
              <FaTelegramPlane />
            </li>

            <li className={styles.icon}>
              <AiOutlineTwitter />
            </li>

            <li className={styles.icon}>
              <BsDiscord />
            </li>

            <li className={styles.icon}>
              <AiOutlineReddit />
            </li>

            <li className={styles.icon}>
              <FiGithub />
            </li>
          </ul>
        </div>
        <div className={styles.join}>
          <button className={styles.btn}>Join Us!</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
