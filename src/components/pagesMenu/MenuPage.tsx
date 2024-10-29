"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import scss from "./MenuPage.module.scss";
import { products } from "@/Products";
import { useLanguageStore } from "@/stores/zustand";

const Menu = () => {
  const { t } = useLanguageStore();
  const [activeItem, setActiveItem] = useState("desserts-001");
  const items = [
    { id: "desserts-001", title: t("Десерты", "Desserts", "Десерттер") },
    {
      id: "hot-drinks-002",
      title: t("Горячие напитки", "Hot Drinks", "Ысык ичимдиктер"),
    },
    {
      id: "cold-drinks-003",
      title: t("Холодные напитки", "Cold Drinks", "Суук ичимдиктер"),
    },
    {
      id: "national-foods-004",
      title: t("Национальные блюда", "National Foods", "Улуттук тамактар"),
    },
    {
      id: "eastern-cuisine-005",
      title: t("Восточная кухня", "Eastern Cuisine", "Чыгыш ашканасы"),
    },
    { id: "fast-foods-006", title: t("Фаст-фуды", "Fast Foods", "Фаст-фуд") },
  ];

  const [activeProduct, setActiveProduct] = useState<null | string>(null);

  function handleClick(item: string) {
    setActiveProduct(item);
    setActiveItem(item);
  }

  const product = useMemo(
    () => products.find((el) => el.id === activeProduct),
    [activeProduct]
  );

  const filterProducts = useMemo(
    () => products.filter((el) => el.categoryId === activeItem),
    [activeItem]
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id={scss.menuPage}>
      <div className="container">
        {activeProduct && product && (
          <button
            className={scss.closeBtn}
            onClick={() => setActiveProduct(null)}
          >
            X
          </button>
        )}
        <div className={scss.menuPage}>
          <div className={scss.menuContent}>
            <ul className={scss.ulDF}>
              {items.map((item, index) => (
                <li
                  className={activeItem === item.id ? scss.activeLi : ""}
                  key={index}
                  onClick={() => handleClick(item.id)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div className={scss.menuBlocks}>
            {activeProduct && product && (
              <div className={scss.Menu}>
                <div className={scss.productContent}>
                  <div key={product.id} className={scss.productCardTwo}>
                    <Image
                      src={product.imageSrc} 
                      alt={product.name}
                      className={scss.productImage}
                      width={300}
                      height={300}
                    />
                    <div className={scss.produtTextTwo}>
                      <div className={scss.iceCreamTwo}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                      </div>
                      <h3>${product.price}</h3>
                    </div>
                  </div>
                  <div className={scss.extras}>
                    <h3>{t("Дополнения", "Extras", "Кошумча")}</h3>
                    <hr />
                    <div className={scss.charyBlock}>
                      <p>{t("Вишня", "Cherry", "Чоң көйкөс")}</p>
                      <p>$0.90</p>
                    </div>
                    <hr />
                  </div>
                </div>
                <p className={scss.P}>
                  {t("Похожие товары", "Similar products", "Ушундай товарлар")}
                </p>
              </div>
            )}
            <div className={scss.productList}>
              {filterProducts.map((el) => (
                <div
                  onClick={() => setActiveProduct(el.id)}
                  key={el.id}
                  className={scss.productCard}
                >
                  <Image
                    onClick={scrollToTop}
                    src={el.imageSrc}
                    alt={el.name}
                    className={scss.productImage}
                    width={300}
                    height={300}
                  />
                  <div className={scss.produtText}>
                    <div className={scss.iceCream}>
                      <h2>{el.name}</h2>
                      <p>{el.description}</p>
                    </div>
                    <h3>${el.price}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
