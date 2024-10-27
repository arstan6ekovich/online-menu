"use client";
import Image from "next/image";
import scss from "./Header.module.scss";
import header_logo from "@/assets/images/header-logo.svg";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Этот импорт оставляем, если он будет использован позже
import { useLanguageStore } from "@/stores/zustand";

const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { language, setLanguage, t } = useLanguageStore();

  // Удаляем неиспользуемую переменную route
  // const route = useRouter(); 

  const navbar = [
    { id: 1, href: "/", name: t("Интерьер", "Interior", "Интерьер") },
    { id: 2, href: "/about", name: t("О нас", "About Us", "Биз жонундо") },
    { id: 3, href: "/menu", name: t("Меню", "Menu", "Меню") },
    { id: 4, href: "/contacts", name: t("Контакты", "Contacts", "Контакт") },
  ];

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value as "ru" | "en" | "kg";
    setLanguage(selectedLanguage);
  };

  useEffect(() => {
    const handleResize = () => setIsActive(window.innerWidth < 1000);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuToggle = () => setIsOpen((prevState) => !prevState);

  return (
    <header id={scss.Header}>
      <div className="container">
        <div className={scss.Header}>
          <Image src={header_logo} alt="Логотип Хедера" />

          {isActive ? (
            <>
              <label className="burger" htmlFor="burger">
                <input
                  type="checkbox"
                  id="burger"
                  checked={isOpen}
                  onChange={handleMenuToggle}
                />
                <span></span>
                <span></span>
                <span></span>
              </label>
              {isOpen && (
                <nav className={scss.Header_nav_mobile}>
                  {navbar.map((item) => (
                    <Link href={item.href} key={item.id}>
                      {item.name}
                    </Link>
                  ))}
                </nav>
              )}
            </>
          ) : (
            <>
              <nav className={scss.Header_nav}>
                {navbar.map((item) => (
                  <Link href={item.href} key={item.id}>
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className={scss.Header_buttons}>
                <button>
                  <CiSearch />
                  {t("Поиск", "Search", "Издөө")}
                </button>
                <select value={language} onChange={handleChangeLanguage}>
                  <option value="en">En</option>
                  <option value="ru">RU</option>
                  <option value="kg">KG</option>
                </select>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
