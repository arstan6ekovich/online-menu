import Image from "next/image";
import scss from "./InteriorPage.module.scss";
import InteriorPage_image1 from "@/assets/images/InteriorPage_image1.svg";
import InteriorPage_image2 from "@/assets/images/InteriorPage_image2.svg";
import image1 from "@/assets/images/image1.svg";
import image2 from "@/assets/images/image2.svg";
import image3 from "@/assets/images/image3.svg";

const InteriorPage = () => {
  return (
    <section id={scss.InteriorPage}>
      <div className={scss.InteriorPage}>
        <Image src={InteriorPage_image1} alt="InteriorPage_image1" />
        <div className={scss.InteriorPage_image}>
          <Image src={image1} alt="image1" />
          <Image src={image2} alt="image2" />
          <Image src={image3} alt="image3" />
        </div>
        <Image src={InteriorPage_image2} alt="InteriorPage_image2" />
      </div>
    </section>
  );
};

export default InteriorPage;
