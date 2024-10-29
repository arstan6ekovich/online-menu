"use client";
import Image from "next/image";
import scss from "./Header.module.scss";
import header_logo from "@/assets/images/header-logo.svg";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useLanguageStore } from "@/stores/zustand";
import { ImCancelCircle } from "react-icons/im";

type MenuItem = {
  name: {
    ru: string;
    en: string;
    kg: string;
  };
  price: string;
  ingredients: {
    ru: string;
    en: string;
    kg: string;
  };
  image: string;
};

type MenuCategory =
  | "Desserts"
  | "Hot Drinks"
  | "Cold Drinks"
  | "National Foods"
  | "Eastern cuisine"
  | "Fast foods";

const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { language, setLanguage, t } = useLanguageStore();
  const [search, setSearch] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const navbar = [
    { id: 1, href: "/", name: t("Интерьер", "Interior", "Интерьер") },
    { id: 2, href: "/about", name: t("О нас", "About Us", "Биз жонундо") },
    { id: 3, href: "/menu", name: t("Меню", "Menu", "Меню") },
    { id: 4, href: "/contacts", name: t("Контакты", "Contacts", "Контакт") },
  ];

  const handleClickChangeLanguage = (selectedLanguage: "ru" | "en" | "kg") => {
    setLanguage(selectedLanguage);
  };

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

  const categories: MenuCategory[] = [
    "Desserts",
    "Hot Drinks",
    "Cold Drinks",
    "National Foods",
    "Eastern cuisine",
    "Fast foods",
  ];
  const allItems: Record<MenuCategory, MenuItem[]> = {
    Desserts: [
      {
        name: {
          ru: "Мороженое",
          en: "Ice Cream",
          kg: "Мороженое",
        },
        price: "$9.11",
        ingredients: {
          ru: "газировка, крем, молоко, сахар",
          en: "soda, cream, milk, sugar",
          kg: "газировка, крем, сүт, кант",
        },
        image: "/images/шоколад.png",
      },
      // Добавьте другие элементы меню
    ],
    "Hot Drinks": [
      {
        name: {
          ru: "Кофе",
          en: "Coffee",
          kg: "Кофе",
        },
        price: "$3.50",
        ingredients: {
          ru: "кофе, вода, сахар",
          en: "coffee, water, sugar",
          kg: "кофе, суу, кант",
        },
        image: "/images/шоколад.png",
      },
    ],
    "Cold Drinks": [
      {
        name: {
          ru: "Кофе со льдом",
          en: "Iced Coffee",
          kg: "Муздак кофе",
        },
        price: "$4.00",
        ingredients: {
          ru: "кофе, лед, молоко",
          en: "coffee, ice, milk",
          kg: "кофе, муздак, сүт",
        },
        image: "/images/шоколад.png",
      },
    ],
    "National Foods": [
      {
        name: {
          ru: "Национальное блюдо 1",
          en: "National Dish 1",
          kg: "Улуттук тамак 1",
        },
        price: "$10.00",
        ingredients: {
          ru: "ингредиент1, ингредиент2",
          en: "ingredient1, ingredient2",
          kg: "ингредиент1, ингредиент2",
        },
        image: "/images/шоколад.png",
      },
    ],
    "Eastern cuisine": [
      {
        name: {
          ru: "Восточное блюдо 1",
          en: "Eastern Dish 1",
          kg: "Чыгыш тамагы 1",
        },
        price: "$12.00",
        ingredients: {
          ru: "ингредиент1, ингредиент2",
          en: "ingredient1, ingredient2",
          kg: "ингредиент1, ингредиент2",
        },
        image: "/images/шоколад.png",
      },
    ],
    "Fast foods": [
      {
        name: {
          ru: "Бургер",
          en: "Burger",
          kg: "Бургер",
        },
        price: "$5.00",
        ingredients: {
          ru: "булочка, говядина, салат",
          en: "bun, beef, lettuce",
          kg: "нандын, уй эт, жапалак",
        },
        image: "/images/шоколад.png",
      },
    ],
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredProducts = categories.flatMap((category) =>
    allItems[category].filter((item) =>
      item.name[language].toLowerCase().includes(searchTerm)
    )
  );

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
                  <div className={scss.lang}>
                    <span
                      onClick={() => handleClickChangeLanguage("en")}
                      className={language === "en" ? scss.active : ""}
                    >
                      En
                    </span>
                    <span
                      onClick={() => handleClickChangeLanguage("ru")}
                      className={language === "ru" ? scss.active : ""}
                    >
                      RU
                    </span>
                    <span
                      onClick={() => handleClickChangeLanguage("kg")}
                      className={language === "kg" ? scss.active : ""}
                    >
                      KG
                    </span>
                  </div>

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
                <button onClick={() => setSearch(true)}>
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
        <div
          className={scss.BlockSearh}
          style={{
            display: search ? "flex" : "none",
            flexDirection: "column",
            background: "black",
            width: "700px",
            position: "absolute",
            top: "200px",
            right: "27%",
            borderRadius: "20px",
          }}
        >
          <div className={scss.BlockSearchtext}>
            <div className="group">
              <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input
                placeholder="Search"
                type="search"
                className="input"
                onChange={handleSearchChange}
              />
            </div>
            <button onClick={() => setSearch(false)}>
              <ImCancelCircle color="white" />
            </button>
          </div>
          <div className={scss.results}>
            {filteredProducts.map((product, index) => (
              <div key={index} className={scss.resultItem}>
                <Image
                  src={product.image}
                  alt={product.name[language]}
                  width={50}
                  height={50}
                  className={scss.Search}
                />
                <div>
                  <h4>{product.name[language]}</h4>
                  <p>{product.price}</p>
                  <p>{product.ingredients[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
