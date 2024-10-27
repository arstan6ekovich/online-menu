"use client";
import Image from "next/image";
import scss from "./ReversePage.module.scss";
import about_image from "@/assets/images/main_icon.svg";
import reverse_image1 from "@/assets/images/reverse_imaage1.svg";
import reverse_image2 from "@/assets/images/reverse_imag2.svg";
import reverse_image_prev from "@/assets/images/reverse_image_prev.svg";
import { useRef, useState } from "react";
import { useLanguageStore } from "@/stores/zustand";

const ReversePage = () => {
  const [reverse, setReverse] = useState(false);
  const scrollGallery = useRef<HTMLDivElement>(null);
  const { t } = useLanguageStore();

  const scrollRight = () => {
    if (scrollGallery.current) {
      scrollGallery.current.scrollBy({
        top: 0,
        left: 300,
        behavior: "smooth",
      });
    }
    setReverse(true);
  };

  const scrollLeft = () => {
    if (scrollGallery.current) {
      scrollGallery.current.scrollBy({
        top: 0,
        left: -300,
        behavior: "smooth",
      });
    }
    setReverse(false);
  };

  return (
    <section id={scss.Reverse}>
      <div className="containers">
        <div className={scss.Reverse}>
          <div className={scss.Reverse_text}>
            <div className={scss.Reverse_about}>
              <Image src={about_image} alt="about_image" />
              <h2>{t("Бестселлеры", "Best Sellers", "Эң көп сатылгандар")}</h2>
            </div>
            <h1>
              {t(
                "Вы резервируете только исключительное",
                "You Only Reserve Exception",
                "Сиз гана өзгөчө нерсени резервдешесиз"
              )}
            </h1>
            <p>
              {t(
                "В каждом месте представлено меню, составленное специально для него. Узнайте, что нового в вашем Cafesio, и найдете моменты Covent Carden.",
                "Each location has a menu curated just for them. See what’s new at your Cafesio and find Cafesio Covent Garden moments.",
                "Ар бир жерде алар үчүн атайын түзүлгөн меню бар. Cafesio жаңылыктарын көрүп, Covent Garden учурларын табыңыз."
              )}
            </p>
          </div>
          <div className={scss.Reverse_image}>
            <Image
              style={{
                transform: reverse ? "rotate(180deg)" : "rotate(0deg)",
              }}
              onClick={() => scrollLeft()}
              src={reverse_image_prev}
              alt="reverse_image_prev"
            />
            <div className={scss.gallery} ref={scrollGallery}>
              <Image src={reverse_image1} alt="reverse_image1" />
              <Image src={reverse_image2} alt="reverse_image2" />
              <Image src={reverse_image2} alt="reverse_image3" />
              <Image src={reverse_image2} alt="reverse_image4" />
            </div>
            <Image
              onClick={() => scrollRight()}
              src={reverse_image_prev}
              alt="reverse_image_next"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReversePage;
