"use client";
import scss from "./QualityPage.module.scss";
import menu_img from "@/assets/images/main_icon.svg";
import menu_img2 from "@/assets/images/main_icon2.svg";
import line_reverse from "@/assets/images/line_reverse.svg";
import line_1 from "@/assets/images/line_1.svg";
import line_2 from "@/assets/images/line_2.svg";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { useLanguageStore } from "@/stores/zustand";

const QualityPage = () => {
  const { t } = useLanguageStore();

  return (
    <section id={scss.Quality}>
      <div className="containers">
        <div className={scss.Quality_text}>
          <div className={scss.Quality_image}>
            <Image src={menu_img} alt="menu" />
            <h1>{t("Главное меню", "Main Menu", "Негизги меню")}</h1>
            <Image src={menu_img2} alt="menu2" />
          </div>
          <h1>
            {t(
              "Исключительное качество. Восхитительно вкусно",
              "Exceptional Quality. Delightfully Delicious",
              "Өзгөчө сапат. Таң калыштуу даамдуу"
            )}
          </h1>
        </div>
        <div className={scss.Quality}>
          <div className={scss.Quality_left}>
            <h2>{t("Десерты", "Desserts", "Таттуулар")}</h2>
            <h2>{t("Горячие напитки", "Hot Drinks", "Ысык суусундуктар")}</h2>
            <h2>
              {t("Холодные напитки", "Cold Drinks", "Муздак суусундуктар")}
            </h2>
            <h2>
              {t("Национальные блюда", "National Foods", "Улуттук тамактар")}
            </h2>
            <h2>{t("Восточная кухня", "Eastern Cuisine", "Чыгыш ашканасы")}</h2>
            <h2>{t("Фастфуд", "Fast Foods", "Тез тамактануулар")}</h2>
          </div>
          <div className={scss.Qualtiy_mar4ik}>
            {[...Array(6)].map((_, index) => (
              <div className={scss.Quality_right} key={index}>
                <div className={scss.Quality_main}>
                  <h3>{t("Пивоварня", "Beer Brewery", "Пиво чыгаруу")}</h3>
                  <Image src={line_reverse} alt="line_reverse" />
                  <h2>$24</h2>
                </div>
                <p>
                  {t(
                    "Описание продукта на русском языке.",
                    "Product description in English.",
                    "Продукттун кыргызча сүрөттөлүшү."
                  )}
                </p>
                <Link href={"/"}>
                  {t("Заказать", "Order Now", "Буйрутма берүү")}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className={scss.Main_buttons}>
          <Image src={line_1} alt="line-1" />
          <button>
            {t(
              "Посмотреть полное меню",
              "View Full Menu",
              "Толук менюну кароо"
            )}{" "}
            <GoArrowRight />
          </button>
          <Image src={line_2} alt="line-2" />
        </div>
      </div>
    </section>
  );
};

export default QualityPage;
