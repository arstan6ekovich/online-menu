"use client";
import scss from "./QualityPage.module.scss";
import menu_img from "@/assets/images/main_icon.svg";
import menu_img2 from "@/assets/images/main_icon2.svg";
import line_reverse from "@/assets/images/line_reverse.svg";
import line_1 from "@/assets/images/line_1.svg";
import line_2 from "@/assets/images/line_2.svg";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { useLanguageStore } from "@/stores/zustand";
import { useState } from "react";

const titleData = [
  {
    id: 0,
    title: { en: "Desserts", ru: "Десерты", kg: "Таттуулар" },
    category: "Desserts",
  },
  {
    id: 1,
    title: { en: "Hot Drinks", ru: "Горячие напитки", kg: "Ысык суусундуктар" },
    category: "Hot Drinks",
  },
  {
    id: 2,
    title: {
      en: "Cold Drinks",
      ru: "Холодные напитки",
      kg: "Муздак суусундуктар",
    },
    category: "Cold Drinks",
  },
  {
    id: 3,
    title: {
      en: "National Foods",
      ru: "Национальные блюда",
      kg: "Улуттук тамактар",
    },
    category: "National Foods",
  },
  {
    id: 4,
    title: {
      en: "Eastern Cuisine",
      ru: "Восточная кухня",
      kg: "Чыгыш ашканасы",
    },
    category: "Eastern Cuisine",
  },
  {
    id: 5,
    title: { en: "Fast Foods", ru: "Фастфуд", kg: "Тез тамактануулар" },
    category: "Fast Foods",
  },
];

const itemData = [
  {
    id: 0,
    title: { en: "Beer Brewery", ru: "Пивоварня", kg: "Пиво чыгаруу" },
    price: 24,
    descr: {
      en: "A special selection of freshly brewed beer with a unique taste.",
      ru: "Специальный выбор свежесваренного пива с уникальным вкусом.",
      kg: "Жаңы кайнатылган пивонун уникалдуу даамы менен өзгөчө тандоо.",
    },
    category: "Desserts",
  },
  {
    id: 1,
    title: {
      en: "Burger & Pasta",
      ru: "Бургер и паста",
      kg: "Бургер жана паста",
    },
    price: 24,
    descr: {
      en: "A delightful combination of burger and pasta for true food lovers.",
      ru: "Восхитительное сочетание бургера и пасты для настоящих гурманов.",
      kg: "Бургер жана пастанын ырахаттуу айкалышы чыныгы тамак сүйүүчүлөр үчүн.",
    },
    category: "Desserts",
  },
  {
    id: 2,
    title: { en: "Fruit Tart", ru: "Фруктовый тарт", kg: "Жемиш тарты" },
    price: 15,
    descr: {
      en: "A fresh fruit tart with a crispy crust and smooth filling.",
      ru: "Свежий фруктовый тарт с хрустящей корочкой и нежной начинкой.",
      kg: "Хрусттаган жемиштер менен толтурулган таттуу тарт.",
    },
    category: "Desserts",
  },
  {
    id: 3,
    title: { en: "Cheesecake", ru: "Чизкейк", kg: "Чизкейк" },
    price: 18,
    descr: {
      en: "A rich and creamy cheesecake, perfect for dessert lovers.",
      ru: "Насыщенный и кремовый чизкейк, идеальный для любителей десертов.",
      kg: "Чизкейктин бай жана каныккан даамы, таттууларды сүйгөндөр үчүн.",
    },
    category: "Desserts",
  },
  {
    id: 4,
    title: {
      en: "Chocolate Mousse",
      ru: "Шоколадный мусс",
      kg: "Шоколад муссу",
    },
    price: 20,
    descr: {
      en: "A light and airy chocolate mousse for a sweet finish.",
      ru: "Легкий и воздушный шоколадный мусс для сладкого завершения.",
      kg: "Жеңил жана абадай таттуу шоколад муссу.",
    },
    category: "Desserts",
  },
  {
    id: 5,
    title: { en: "Creme Brulee", ru: "Крем-брюле", kg: "Крем брюле" },
    price: 22,
    descr: {
      en: "Classic creme brulee with a caramelized top and creamy center.",
      ru: "Классическое крем-брюле с карамелизированной корочкой и нежной серединкой.",
      kg: "Карамелденген үстү менен классикалык крем брюле.",
    },
    category: "Desserts",
  },
  {
    id: 6,
    title: { en: "Apple Pie", ru: "Яблочный пирог", kg: "Алма пирогу" },
    price: 16,
    descr: {
      en: "A traditional apple pie with a warm and inviting flavor.",
      ru: "Традиционный яблочный пирог с теплыми и привлекательными ароматами.",
      kg: "Жылуу жана чакырган даамдар менен салттуу алма пирогу.",
    },
    category: "Desserts",
  },
  {
    id: 7,
    title: { en: "Pavlova", ru: "Павлова", kg: "Павлова" },
    price: 19,
    descr: {
      en: "A delicate meringue-based dessert topped with fresh fruits.",
      ru: "Нежный десерт на основе безе с добавлением свежих фруктов.",
      kg: "Жаңы жемиштер менен жасалган деликаттуу безе десерти.",
    },
    category: "Desserts",
  },

  {
    id: 8,
    title: { en: "Espresso", ru: "Эспрессо", kg: "Эспрессо" },
    price: 8,
    descr: {
      en: "A strong and bold espresso for a quick energy boost.",
      ru: "Крепкий и насыщенный эспрессо для быстрой энергии.",
      kg: "Быстуу энергия алуу үчүн күчтүү эспрессо.",
    },
    category: "Hot Drinks",
  },
  {
    id: 9,
    title: { en: "Latte", ru: "Латте", kg: "Латте" },
    price: 10,
    descr: {
      en: "A smooth latte with a touch of sweetness.",
      ru: "Нежный латте с легкой сладостью.",
      kg: "Жеңил таттуу латте.",
    },
    category: "Hot Drinks",
  },
  {
    id: 10,
    title: { en: "Cappuccino", ru: "Капучино", kg: "Капучино" },
    price: 9,
    descr: {
      en: "A classic cappuccino with a creamy foam top.",
      ru: "Классический капучино с кремовой пенкой.",
      kg: "Кремдүү көбүгү бар классикалык капучино.",
    },
    category: "Hot Drinks",
  },
  {
    id: 11,
    title: { en: "Hot Chocolate", ru: "Горячий шоколад", kg: "Ысык шоколад" },
    price: 12,
    descr: {
      en: "Rich and smooth hot chocolate for cozy moments.",
      ru: "Насыщенный и гладкий горячий шоколад для уютных моментов.",
      kg: "Жайлуу учурлар үчүн бай жана жумшак ысык шоколад.",
    },
    category: "Hot Drinks",
  },
  {
    id: 12,
    title: { en: "Chai Latte", ru: "Чай латте", kg: "Чай латте" },
    price: 10,
    descr: {
      en: "A warm and spicy chai latte with a hint of sweetness.",
      ru: "Теплый и пряный чай латте с легкой сладостью.",
      kg: "Бир аз таттуу менен жылуу жана таттуу чай латте.",
    },
    category: "Hot Drinks",
  },
  {
    id: 13,
    title: { en: "Mocha", ru: "Мокка", kg: "Мокка" },
    price: 11,
    descr: {
      en: "A blend of coffee and chocolate flavors.",
      ru: "Сочетание ароматов кофе и шоколада.",
      kg: "Кофе жана шоколад даамдарынын айкалышы.",
    },
    category: "Hot Drinks",
  },
  {
    id: 14,
    title: { en: "Americano", ru: "Американо", kg: "Американо" },
    price: 7,
    descr: {
      en: "A classic Americano with a smooth taste.",
      ru: "Классический американо с мягким вкусом.",
      kg: "Мягкий даам менен классический американо.",
    },
    category: "Hot Drinks",
  },
  {
    id: 15,
    title: { en: "Herbal Tea", ru: "Травяной чай", kg: "Өсүмдүк чай" },
    price: 6,
    descr: {
      en: "A soothing herbal tea for relaxation.",
      ru: "Успокаивающий травяной чай для расслабления.",
      kg: "Жайлуу болуу үчүн өсүмдүк чайы.",
    },
    category: "Hot Drinks",
  },

  {
    id: 16,
    title: { en: "Iced Latte", ru: "Латте со льдом", kg: "Муздак латте" },
    price: 10,
    descr: {
      en: "A refreshing iced latte with a smooth taste.",
      ru: "Освежающий латте со льдом с мягким вкусом.",
      kg: "Муздак латте менен жаңы даам.",
    },
    category: "Cold Drinks",
  },
  {
    id: 17,
    title: { en: "Lemonade", ru: "Лимонад", kg: "Лимонад" },
    price: 7,
    descr: {
      en: "A classic lemonade with a zesty lemon flavor.",
      ru: "Классический лимонад с цитрусовой свежестью.",
      kg: "Цитрус жыты бар классикалык лимонад.",
    },
    category: "Cold Drinks",
  },
  {
    id: 18,
    title: { en: "Iced Tea", ru: "Чай со льдом", kg: "Муздак чай" },
    price: 6,
    descr: {
      en: "Cool down with a refreshing iced tea.",
      ru: "Освежающий чай со льдом для прохлады.",
      kg: "Жаңы жана муздак чай менен сергитиңиз.",
    },
    category: "Cold Drinks",
  },
  {
    id: 19,
    title: { en: "Smoothie", ru: "Смузи", kg: "Смузи" },
    price: 8,
    descr: {
      en: "A fruity smoothie for a burst of energy.",
      ru: "Фруктовый смузи для энергии.",
      kg: "Энергия алуу үчүн жемиштүү смузи.",
    },
    category: "Cold Drinks",
  },
  {
    id: 20,
    title: { en: "Milkshake", ru: "Молочный коктейль", kg: "Сүт коктейли" },
    price: 9,
    descr: {
      en: "A creamy milkshake in various flavors.",
      ru: "Кремовый молочный коктейль с разными вкусами.",
      kg: "Ар түрдүү даамдары бар сүт коктейли.",
    },
    category: "Cold Drinks",
  },
  {
    id: 21,
    title: { en: "Cold Brew", ru: "Холодный кофе", kg: "Муздак кофе" },
    price: 8,
    descr: {
      en: "Smooth and refreshing cold brew coffee.",
      ru: "Гладкий и освежающий холодный кофе.",
      kg: "Жаңы муздак кофе.",
    },
    category: "Cold Drinks",
  },
  {
    id: 22,
    title: { en: "Mojito", ru: "Мохито", kg: "Мохито" },
    price: 10,
    descr: {
      en: "A refreshing mojito with mint and lime.",
      ru: "Освежающий мохито с мятой и лаймом.",
      kg: "Мята жана лайм менен муздак мохито.",
    },
    category: "Cold Drinks",
  },
  {
    id: 23,
    title: { en: "Coconut Water", ru: "Кокосовая вода", kg: "Кокос суусу" },
    price: 6,
    descr: {
      en: "Hydrating coconut water to beat the heat.",
      ru: "Освежающая кокосовая вода для утоления жажды.",
      kg: "Жаңы кокос суусу ысыкты жеңүү үчүн.",
    },
    category: "Cold Drinks",
  },

  // National Foods
  {
    id: 24,
    title: { en: "Plov", ru: "Плов", kg: "Плов" },
    price: 18,
    descr: {
      en: "Traditional rice dish with meat and vegetables.",
      ru: "Традиционное блюдо из риса с мясом и овощами.",
      kg: "Эт жана жашылчалар менен салттуу күрүч тамагы.",
    },
    category: "National Foods",
  },
  {
    id: 25,
    title: { en: "Lagman", ru: "Лагман", kg: "Лагман" },
    price: 20,
    descr: {
      en: "A flavorful noodle soup with meat and vegetables.",
      ru: "Ароматный суп с лапшой, мясом и овощами.",
      kg: "Эт жана жашылчалар менен таттуу шорпо.",
    },
    category: "National Foods",
  },
  {
    id: 26,
    title: { en: "Samsa", ru: "Самса", kg: "Самса" },
    price: 6,
    descr: {
      en: "Baked pastry filled with seasoned meat.",
      ru: "Выпечка с начинкой из приправленного мяса.",
      kg: "Эт менен толтурулган бышырылган самса.",
    },
    category: "National Foods",
  },
  {
    id: 27,
    title: { en: "Manty", ru: "Манты", kg: "Манты" },
    price: 15,
    descr: {
      en: "Steamed dumplings filled with meat and spices.",
      ru: "Пельмени на пару с начинкой из мяса и специй.",
      kg: "Эт жана татымалдар менен бууда бышырылган манты.",
    },
    category: "National Foods",
  },
  {
    id: 28,
    title: { en: "Kuurdak", ru: "Куурдак", kg: "Куурдак" },
    price: 25,
    descr: {
      en: "Fried meat and potatoes with spices.",
      ru: "Жареное мясо и картофель с приправами.",
      kg: "Татымалдар менен куурган эт жана картошка.",
    },
    category: "National Foods",
  },
  {
    id: 29,
    title: { en: "Beshbarmak", ru: "Бешбармак", kg: "Бешбармак" },
    price: 30,
    descr: {
      en: "A traditional dish made with boiled meat and noodles.",
      ru: "Традиционное блюдо из вареного мяса и лапши.",
      kg: "Эт жана кесме менен жасалган салттуу тамак.",
    },
    category: "National Foods",
  },
  {
    id: 30,
    title: { en: "Shashlik", ru: "Шашлык", kg: "Шашлык" },
    price: 22,
    descr: {
      en: "Grilled meat skewers seasoned with spices.",
      ru: "Шашлык из мяса с приправами.",
      kg: "Татымалдар менен маринаддалган эт шашлык.",
    },
    category: "National Foods",
  },
  {
    id: 31,
    title: { en: "Boorsok", ru: "Борсоки", kg: "Борсоки" },
    price: 5,
    descr: {
      en: "Fried dough pieces, a traditional snack.",
      ru: "Жареные кусочки теста, традиционный перекус.",
      kg: "Куурулган камыр кесимдери, салттуу тамак.",
    },
    category: "National Foods",
  },

  // Eastern Cuisine
  {
    id: 32,
    title: { en: "Sushi", ru: "Суши", kg: "Суши" },
    price: 12,
    descr: {
      en: "Fresh sushi rolls with various fillings.",
      ru: "Свежие суши-роллы с разнообразными начинками.",
      kg: "Түрдүү толтурулган жаңы суши роллдору.",
    },
    category: "Eastern Cuisine",
  },
  {
    id: 33,
    title: { en: "Ramen", ru: "Рамен", kg: "Рамен" },
    price: 15,
    descr: {
      en: "A hot and flavorful noodle soup with meat.",
      ru: "Горячий и ароматный суп с лапшой и мясом.",
      kg: "Эт менен ысык жана даамдуу кесме шорпосу.",
    },
    category: "Eastern Cuisine",
  },
  {
    id: 34,
    title: { en: "Dim Sum", ru: "Дим сам", kg: "Дим сам" },
    price: 10,
    descr: {
      en: "Small dumplings with various fillings.",
      ru: "Небольшие пельмени с различными начинками.",
      kg: "Түрдүү толтурулган кичинекей пельмени.",
    },
    category: "Eastern Cuisine",
  },
  {
    id: 35,
    title: { en: "Spring Rolls", ru: "Спринг роллы", kg: "Спринг ролл" },
    price: 8,
    descr: {
      en: "Crispy spring rolls with fresh veggies.",
      ru: "Хрустящие спринг роллы со свежими овощами.",
      kg: "Жашылчалар менен хрусттаган спринг роллдор.",
    },
    category: "Eastern Cuisine",
  },
  {
    id: 36,
    title: { en: "Pad Thai", ru: "Пад тай", kg: "Пад тай" },
    price: 14,
    descr: {
      en: "Stir-fried noodles with vegetables and spices.",
      ru: "Жареная лапша с овощами и специями.",
      kg: "Жашылча жана татымалдар менен куурулган кесме.",
    },
    category: "Eastern Cuisine",
  },
  {
    id: 37,
    title: {
      en: "Korean BBQ",
      ru: "Корейское барбекю",
      kg: "Корейская барбекю",
    },
    price: 20,
    descr: {
      en: "Grilled meats served with Korean sauces.",
      ru: "Гриль-мясо с корейскими соусами.",
      kg: "Корей соусу менен эттен жасалган барбекю.",
    },
    category: "Eastern Cuisine",
  },
  {
    id: 38,
    title: { en: "Pho", ru: "Фо", kg: "Фо" },
    price: 13,
    descr: {
      en: "Vietnamese noodle soup with herbs and spices.",
      ru: "Вьетнамский суп с лапшой, зеленью и специями.",
      kg: "Кесме, чөп жана татымалдар менен вьетнам шорпосу.",
    },
    category: "Eastern Cuisine",
  },
  {
    id: 39,
    title: { en: "Peking Duck", ru: "Утка по-пекински", kg: "Пекин өрдөгү" },
    price: 25,
    descr: {
      en: "Crispy Peking duck with hoisin sauce.",
      ru: "Хрустящая утка по-пекински с соусом хойсин.",
      kg: "Хойсин соусу менен хрусттаган пекин өрдөгү.",
    },
    category: "Eastern Cuisine",
  },
];

const QualityPage = () => {
  const { t } = useLanguageStore();
  const [selectedCategory, setSelectedCategory] = useState(
    titleData[0].category
  );

  const filteredProducts = itemData.filter(
    (el) => el.category === selectedCategory
  );
  const changedFilterProducts = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section id={scss.Quality}>
      <div className="containers">
        <div className={scss.Quality_text}>
          <div className={scss.Quality_image}>
            <Image src={menu_img} alt="menu" />
            <h1>{t("Главное меню", "Main Menu", "Негизги меню")}</h1>
            <Image src={menu_img2} alt="menu2" />
          </div>
          <h1>
            {t(
              "Исключительное качество. Восхитительно вкусно",
              "Exceptional Quality. Delightfully Delicious",
              "Өзгөчө сапат. Таң калыштуу даамдуу"
            )}
          </h1>
        </div>
        <div className={scss.Quality}>
          <div className={scss.Quality_left}>
            {titleData.map((title) => (
              <h2
                onClick={() => changedFilterProducts(title.category)}
                key={title.id}
              >
                {t(title.title.ru, title.title.en, title.title.kg)}
              </h2>
            ))}
          </div>
          <div className={scss.Qualtiy_mar4ik}>
            {filteredProducts.map((product, index) => (
              <div className={scss.Quality_right} key={index}>
                <div className={scss.Quality_main}>
                  <h3>
                    {t(product.title.ru, product.title.en, product.title.kg)}
                  </h3>
                  <Image src={line_reverse} alt="line_reverse" />
                  <h2>${product.price}</h2>
                </div>
                <p>{t(product.descr.ru, product.descr.en, product.descr.kg)}</p>
                <Link href={"/"}>
                  {t("Заказать", "Order Now", "Буйрутма берүү")}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className={scss.Main_buttons}>
          <Image src={line_1} alt="line-1" />
          <button>
            {t(
              "Посмотреть полное меню",
              "View Full Menu",
              "Толук менюну кароо"
            )}{" "}
            <GoArrowRight />
          </button>
          <Image src={line_2} alt="line-2" />
        </div>
      </div>
    </section>
  );
};

export default QualityPage;
