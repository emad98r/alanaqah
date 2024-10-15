import "./footer.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import wave from "../../assets/icons/wave.svg";

function Footer() {
  return (
    <footer>
      <img src={wave} alt="" />
      <div className="footer-wrapper">
        <h1 className="logo">الأناقة</h1>
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
