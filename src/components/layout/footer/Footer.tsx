import Image from "next/image";
import scss from "./Footer.module.scss";
import footer_logo from "@/assets/images/header-logo.svg";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id={scss.footer}>
      <div className="container">
        <div className={scss.footer}>
          <Image src={footer_logo} alt="footer_logo" />
          <div className={scss.footer_nav}>
            <Link href={"/"}>interior</Link>
            <Link href={"/"}>About us</Link>
            <Link href={"/"}>Menu</Link>
            <Link href={"/"}>Contacts</Link>
          </div>
          <div className={scss.footer_icons}>
            <button>
              <FaTelegramPlane />
            </button>
            <button>
              <FaInstagram />
            </button>
          </div>
        </div>
        <div className={scss.footer_line}></div>
        <h2 className={scss.footer_text}>c 2023 Motion Study LLC</h2>
      </div>
    </footer>
  );
};

export default Footer;
