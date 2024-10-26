"use client";
import Image from "next/image";
import scss from "./ReversePage.module.scss";
import about_image from "@/assets/images/main_icon.svg";
import reverse_image1 from "@/assets/images/reverse_imaage1.svg";
import reverse_image2 from "@/assets/images/reverse_imag2.svg";
import reverse_image_prev from "@/assets/images/reverse_image_prev.svg";
import { useRef, useState } from "react";

const ReversePage = () => {
  const [reverse, setReverse] = useState(false);
  const scrollGallery = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollGallery.current) {
      scrollGallery.current.scrollBy({
        top: 0,
        left: 300, 
        behavior: "smooth",
      });
    }
    setReverse(true); // Using reverse state here if needed later
  };

  const scrollLeft = () => {
    if (scrollGallery.current) {
      scrollGallery.current.scrollBy({
        top: 0,
        left: -300, 
        behavior: "smooth", 
      });
    }
    setReverse(false); // Set reverse state accordingly
  };

  return (
    <section id={scss.Reverse}>
      <div className="containers">
        <div className={scss.Reverse}>
          <div className={scss.Reverse_text}>
            <div className={scss.Reverse_about}>
              <Image src={about_image} alt="about_image" />
              <h2>Best Sellers</h2>
            </div>
            <h1>You Only Reserve Exception</h1>
            <p>
              Each location has a menu that`s curated just for them. See what
              new at your Cafesio and You`ll find Cafesio Covent Carden moments.
            </p>
          </div>
          <div className={scss.Reverse_image}>
            <Image
              style={{
                transform: reverse ? "rotate(180deg)" : "rotate(0deg)", // Use reverse state
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
