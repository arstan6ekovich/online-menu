import Image from "next/image";
import scss from "./MenuPage.module.scss";
import menu_image from "@/assets/images/main_icon.svg";
import menu_left from "@/assets/images/menu_left.svg";
import menu_right from "@/assets/images/menu_right.svg";

const MenuPage = () => {
  return (
    <section id={scss.Menu}>
      <div className="containers">
        <div className={scss.Menu}>
          <div className={scss.Menu_left}>
            <div className={scss.Menu_text}>
              <Image src={menu_image} alt="Menu Image" width={500} height={300} />
              <h2>About Us</h2>
            </div>
            <h1>A Journey Through Cafesio Flavors</h1>
            <Image src={menu_left} alt="Menu Left" width={500} height={300} />
          </div>
          <div className={scss.Menu_right}>
            <p>
              Try dishes that will open up new tastes for you and delight your
              eyes with their appearance. Here you will find a cozy atmosphere,
              excellent service and attention to each guest. Book a table now
              and enjoy a unique experience of taste discovery!
            </p>
            <Image src={menu_right} alt="Menu Right" width={500} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
