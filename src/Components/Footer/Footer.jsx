import "./footer.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import wave from "../../assets/icons/wave.svg";
import FooterLogo from "../../assets/icons/footer logo.png";
function Footer() {
  return (
    <footer>
      <img className="wave" src={wave} alt="" />
      <div className="footer-wrapper">
        <img className="footer-logo" src={FooterLogo} alt="" />
        <ul>
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaWhatsapp />
          </li>
          <li>
            <MdOutlineMarkEmailRead />
          </li>
        </ul>
        <p>
          تصميم <a href="https://emadrashad.com/"> 2024 @ EMAD RASHAD </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
