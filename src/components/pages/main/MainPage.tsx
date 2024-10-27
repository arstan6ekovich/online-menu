// MainPage.tsx
"use client";
import icon from "@/assets/images/main_icon.svg";
import icon1 from "@/assets/images/main_icon2.svg";
import line_1 from "@/assets/images/line_1.svg";
import line_2 from "@/assets/images/line_2.svg";
import line_3 from "@/assets/images/Line 8.svg";
import maps from "@/assets/images/maps.svg";
import telfon from "@/assets/images/tel.svg";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import scss from "./MainPage.module.scss";
import { useLanguageStore } from "@/stores/zustand";

const MainPage = () => {
  const { t } = useLanguageStore();

  return (
    <section id={scss.Main}>
      <div className="container">
        <div className={scss.Main}>
          <div className={scss.Main_icon}>
            <Image src={icon} alt="icon" />
            <h2>{t("Вкусный", "Delicious", "Даамдуу")}</h2>
            <Image src={icon1} alt="icon" />
          </div>
          <h1>
            {t("Итальянская кухня", "Italian Cuisine", "Итальян ашканасы")}
          </h1>
          <p>
            {t(
              "Классический стейк и вкусные блюда с неожиданными поворотами. Солнечный декор ресторана вдохновлен гостями.",
              "Classic steak & delicious with delightfully unexpected twists. The restaurant's sunny decor was inspired by the diners.",
              "Классикалык стейк жана таң калыштуу бурулуштары менен даамдуу тамактар. Ресторандын күнөстүү жасалгасы коноктордун илхамына арналган."
            )}
          </p>
          <div className={scss.Main_buttons}>
            <Image src={line_1} alt="line-1" />
            <button>
              {t(
                "Забронируйте столик",
                "Reserve Your Table",
                "Стол заказ кылуу"
              )}{" "}
              <GoArrowRight />
            </button>
            <Image src={line_2} alt="line-2" />
          </div>
        </div>
        <div className={scss.Main_bottom}>
          <div className={scss.Main_left}>
            <h2>{t("Локация", "Location", "Орду")}</h2>
            <Image src={line_3} alt="line_3" />
            <Image src={maps} alt="maps" />
            <p>Rua da moeda 1g,1200-275, Португалия</p>
          </div>
          <div className={scss.Main_right}>
            <h2>{t("Горячая линия", "Hotline", "Ысык линия")}</h2>
            <Image src={line_3} alt="line_3" />
            <Image src={telfon} alt="telfon" />
            <p>+771219900</p>
          </div>
        </div>
        <div className={scss.Main_line}></div>
        <div className={scss.Main_line1}></div>
      </div>
    </section>
  );
};

export default MainPage;
