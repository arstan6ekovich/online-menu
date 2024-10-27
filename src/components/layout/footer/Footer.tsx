"use client";
import Image from "next/image";
import scss from "./Footer.module.scss";
import footer_logo from "@/assets/images/header-logo.svg";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useLanguageStore } from "@/stores/zustand";

const Footer = () => {
  const { t } = useLanguageStore();
  return (
    <footer id={scss.footer}>
      <div className="container">
        <div className={scss.footer}>
          <Image src={footer_logo} alt="footer_logo" />
          <div className={scss.footer_nav}>
            <Link href={"/"}>{t("Интерьер", "interior", "Интерьер")}</Link>
            <Link href={"/"}>{t("О нас", "About us", "Биз жонундо")}</Link>
            <Link href={"/"}>{t("Меню", "Menu", "Меню")}</Link>
            <Link href={"/"}>{t("Контакты", "Contacts", "Контакт")}</Link>
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
