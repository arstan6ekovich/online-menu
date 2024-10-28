"use client";
import Image from "next/image";
import scss from "./MenuPage.module.scss";
import menu_image from "@/assets/images/main_icon.svg";
import menu_left from "@/assets/images/menu_left.svg";
import menu_right from "@/assets/images/menu_right.svg";
import { useLanguageStore } from "@/stores/zustand";

const MenuPage = () => {
  const { t } = useLanguageStore();

  return (
    <section id={scss.Menu}>
      <div className="containers">
        <div className={scss.Menu}>
          <div className={scss.Menu_left}>
            <div className={scss.Menu_text}>
              <Image
                src={menu_image}
                alt="Menu Image"
                width={500}
                height={100}
              />
              <h2>{t("О нас", "About Us", "Биз жонундо")}</h2>
            </div>
            <h1>
              {t(
                "Путешествие сквозь ароматы Cafesio",
                "A Journey Through Cafesio Flavors",
                "Cafesio даамдарына саякат"
              )}
            </h1>
            <Image
              className={scss.img}
              src={menu_left}
              alt="Menu Left"
              width={500}
              height={300}
            />
          </div>
          <div className={scss.Menu_right}>
            <p>
              {t(
                "Попробуйте блюда, которые откроют вам новые вкусы и порадуют ваш взгляд своим внешним видом. Здесь вы найдете уютную атмосферу, отличное обслуживание и внимание к каждому гостю. Забронируйте столик сейчас и насладитесь уникальным опытом открытия вкусов!",
                "Try dishes that will open up new tastes for you and delight your eyes with their appearance. Here you will find a cozy atmosphere, excellent service, and attention to each guest. Book a table now and enjoy a unique experience of taste discovery!",
                "Сизге жаңы даамдарды ачып, көздүн жоосун алган тамактардан ырахат алыңыз. Бул жерде сиз жылуу атмосфераны, мыкты тейлөөнү жана ар бир конокко көңүл бурууну таба аласыз. Азыр столду заказ кылып, уникалдуу даам ачуу тажрыйбасынан ырахат алыңыз!"
              )}
            </p>
            <Image
              className={scss.img}
              src={menu_right}
              alt="Menu Right"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
