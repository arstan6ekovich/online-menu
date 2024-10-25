"use client";
import Image from "next/image";
import scss from "./Header.module.scss";
import header_logo from "@/assets/images/header-logo.svg";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navbar = [
    {
      id: 1,
      href: "/",
      name: "Interior",
    },
    {
      id: 2,
      href: "/about",
      name: "About Us",
    },
    {
      id: 3,
      href: "/menu",
      name: "Menu",
    },
    {
      id: 4,
      href: "/contacts",
      name: "Contacts",
    },
  ];

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
          <Image src={header_logo} alt="Header Logo" />

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
                  <CiSearch /> Search
                </button>
                <select>
                  <option value="EN">En</option>
                  <option value="RU">RU</option>
                  <option value="KG">KG</option>
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
