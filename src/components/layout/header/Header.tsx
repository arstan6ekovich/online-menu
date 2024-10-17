import Image from "next/image";
import scss from "./Header.module.scss";
import header_logo from "@/assets/images/header-logo.svg";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header id={scss.Header}>
      <div className="container">
        <div className={scss.Header}>
          <Image src={header_logo} alt={header_logo} />
          <div className={scss.Header_nav}>
            <Link href={"/"}>interior</Link>
            <Link href={"/"}>About Us</Link>
            <Link href={"/menu"}>Menu</Link>
            <Link href={"/"}>Contacts</Link>
          </div>
          <div className={scss.Header_buttons}>
            <button>
              <CiSearch /> Search
            </button>
            <select>
              <option value="EN">En</option>
              <option value="RU">RU</option>
              <option value="KG">KG</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
