import { FC, ReactNode } from "react";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface LayoutType {
  children: ReactNode;
}

const Layout: FC<LayoutType> = ({ children }) => {
  return (
    <div id={scss.Layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;