import scss from "./QualityPage.module.scss";
import menu_img from "@/assets/images/main_icon.svg";
import menu_img2 from "@/assets/images/main_icon2.svg";
import line_reverse from "@/assets/images/line_reverse.svg";
import line_1 from "@/assets/images/line_1.svg";
import line_2 from "@/assets/images/line_2.svg";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const QualityPage = () => {
  return (
    <section id={scss.Quality}>
      <div className="containers">
        <div className={scss.Quality_text}>
          <div className={scss.Quality_image}>
            <Image src={menu_img} alt="menu" />
            <h1>Main Menu</h1>
            <Image src={menu_img2} alt="menu2" />
          </div>
          <h1>Exceptional Quality. Delightfully Delicious</h1>
        </div>
        <div className={scss.Quality}>
          <div className={scss.Quality_left}>
            <h2>Desserts</h2>
            <h2>Hot Drinks</h2>
            <h2>Cold Drinks</h2>
            <h2>National Foods</h2>
            <h2>Eastern cuisine</h2>
            <h2>Fast foods</h2>
          </div>
          <div className={scss.Qualtiy_mar4ik}>
            <div className={scss.Quality_right}>
              <div className={scss.Quality_main}>
                <h3>Beer Brewery</h3>
                <Image src={line_reverse} alt="line_reverse" />
                <h2>$24</h2>
              </div>
              <p>
                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att
                endomatisk. Geogehet pultvätta, om pneumativ.
              </p>
              <Link href={"/"}>Order Now</Link>
            </div>
            <div className={scss.Quality_right}>
              <div className={scss.Quality_main}>
                <h3>Beer Brewery</h3>
                <Image src={line_reverse} alt="line_reverse" />
                <h2>$24</h2>
              </div>
              <p>
                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att
                endomatisk. Geogehet pultvätta, om pneumativ.
              </p>
              <Link href={"/"}>Order Now</Link>
            </div>
            <div className={scss.Quality_right}>
              <div className={scss.Quality_main}>
                <h3>Beer Brewery</h3>
                <Image src={line_reverse} alt="line_reverse" />
                <h2>$24</h2>
              </div>
              <p>
                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att
                endomatisk. Geogehet pultvätta, om pneumativ.
              </p>
              <Link href={"/"}>Order Now</Link>
            </div>
            <div className={scss.Quality_right}>
              <div className={scss.Quality_main}>
                <h3>Beer Brewery</h3>
                <Image src={line_reverse} alt="line_reverse" />
                <h2>$24</h2>
              </div>
              <p>
                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att
                endomatisk. Geogehet pultvätta, om pneumativ.
              </p>
              <Link href={"/"}>Order Now</Link>
            </div>
            <div className={scss.Quality_right}>
              <div className={scss.Quality_main}>
                <h3>Beer Brewery</h3>
                <Image src={line_reverse} alt="line_reverse" />
                <h2>$24</h2>
              </div>
              <p>
                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att
                endomatisk. Geogehet pultvätta, om pneumativ.
              </p>
              <Link href={"/"}>Order Now</Link>
            </div>
            <div className={scss.Quality_right}>
              <div className={scss.Quality_main}>
                <h3>Beer Brewery</h3>
                <Image src={line_reverse} alt="line_reverse" />
                <h2>$24</h2>
              </div>
              <p>
                Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att
                endomatisk. Geogehet pultvätta, om pneumativ.
              </p>
              <Link href={"/"}>Order Now</Link>
            </div>
          </div>
        </div>
        <div className={scss.Main_buttons}>
          <Image src={line_1} alt="line-1" />
          <button>
            View Full menu <GoArrowRight />
          </button>
          <Image src={line_2} alt="line-2" />
        </div>
      </div>
    </section>
  );
};

export default QualityPage;
