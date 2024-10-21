import InteriorPage from "./interior/InteriorPage";
import MainPage from "./main/MainPage";
import MenuPage from "./menu/MenuPage";
import QualityPage from "./quality/QualityPage";
import ReversePage from "./reverse/ReversePage";
import Visit from "./visit/VisitPage";

const HomePage = () => {
  return (
    <>
      <MainPage />
      <MenuPage />
      <ReversePage />
      <QualityPage />
      <InteriorPage />
      <Visit />
    </>
  );
};

export default HomePage;
