"use client";

import { useState } from "react";
import scss from "./MenuPage.module.scss";
import { useLanguageStore } from "@/stores/zustand";

type MenuItem = {
  name: {
    ru: string;
    en: string;
    kg: string;
  };
  price: string;
  ingredients: {
    ru: string;
    en: string;
    kg: string;
  };
  image: string;
};

type MenuCategory =
  | "Desserts"
  | "Hot Drinks"
  | "Cold Drinks"
  | "National Foods"
  | "Eastern cuisine"
  | "Fast foods";

const Menu = () => {
  const categories: MenuCategory[] = [
    "Desserts",
    "Hot Drinks",
    "Cold Drinks",
    "National Foods",
    "Eastern cuisine",
    "Fast foods",
  ];

  const allItems: Record<MenuCategory, MenuItem[]> = {
    Desserts: [
      {
        name: {
          ru: "Мороженое",
          en: "Ice Cream",
          kg: "Мороженое",
        },
        price: "$9.11",
        ingredients: {
          ru: "газировка, крем, молоко, сахар",
          en: "soda, cream, milk, sugar",
          kg: "газировка, крем, сүт, кант",
        },
        image: "/images/шоколад.png",
      },
      {
        name: {
          ru: "Мороженое",
          en: "Ice Cream",
          kg: "Мороженое",
        },
        price: "$12.99",
        ingredients: {
          ru: "мука, сахар, масло",
          en: "flour, sugar, butter",
          kg: "ун, кант, май",
        },
        image: "/images/мороженное.png",
      },
      {
        name: {
          ru: "Мороженое с шоколадом",
          en: "Ice Cream with Chocolate",
          kg: "Шоколаддуу мороженое",
        },
        price: "$12.99",
        ingredients: {
          ru: "мука, сахар, масло",
          en: "flour, sugar, butter",
          kg: "ун, кант, май",
        },
        image: "/images/мороженноуСШоколадом.png",
      },
      {
        name: {
          ru: "Красный шоколад",
          en: "Red Chocolate",
          kg: "Кызыл шоколад",
        },
        price: "$12.99",
        ingredients: {
          ru: "мука, сахар, масло",
          en: "flour, sugar, butter",
          kg: "ун, кант, май",
        },
        image: "/images/красныйШоколад.png",
      },
      {
        name: {
          ru: "Фруктовый коктейль",
          en: "Fruit Cocktail",
          kg: "Жемиш коктейли",
        },
        price: "$12.99",
        ingredients: {
          ru: "мука, сахар, масло",
          en: "flour, sugar, butter",
          kg: "ун, кант, май",
        },
        image: "/images/фруктовыйКоктейл.png",
      },
      {
        name: {
          ru: "Сок",
          en: "Juice",
          kg: "Сок",
        },
        price: "$12.99",
        ingredients: {
          ru: "мука, сахар, масло",
          en: "flour, sugar, butter",
          kg: "ун, кант, май",
        },
        image: "/images/сок.png",
      },
    ],
    "Hot Drinks": [
      {
        name: {
          ru: "Кофе",
          en: "Coffee",
          kg: "Кофе",
        },
        price: "$3.50",
        ingredients: {
          ru: "кофе, вода, сахар",
          en: "coffee, water, sugar",
          kg: "кофе, суу, кант",
        },
        image: "/images/шоколад.png",
      },
      {
        name: {
          ru: "Чай",
          en: "Tea",
          kg: "Чай",
        },
        price: "$2.50",
        ingredients: {
          ru: "чай, вода",
          en: "tea, water",
          kg: "чай, суу",
        },
        image: "/images/шоколад.png",
      },
    ],
    "Cold Drinks": [
      {
        name: {
          ru: "Кофе со льдом",
          en: "Iced Coffee",
          kg: "Муздак кофе",
        },
        price: "$4.00",
        ingredients: {
          ru: "кофе, лед, молоко",
          en: "coffee, ice, milk",
          kg: "кофе, муздак, сүт",
        },
        image: "/images/шоколад.png",
      },
      {
        name: {
          ru: "Газировка",
          en: "Soda",
          kg: "Газдалган суу",
        },
        price: "$2.00",
        ingredients: {
          ru: "газированная вода, сахар",
          en: "carbonated water, sugar",
          kg: "газдалган суу, кант",
        },
        image: "/images/шоколад.png",
      },
    ],
    "National Foods": [
      {
        name: {
          ru: "Национальное блюдо 1",
          en: "National Dish 1",
          kg: "Улуттук тамак 1",
        },
        price: "$10.00",
        ingredients: {
          ru: "ингредиент1, ингредиент2",
          en: "ingredient1, ingredient2",
          kg: "ингредиент1, ингредиент2",
        },
        image: "/images/шоколад.png",
      },
    ],
    "Eastern cuisine": [
      {
        name: {
          ru: "Восточное блюдо 1",
          en: "Eastern Dish 1",
          kg: "Чыгыш тамагы 1",
        },
        price: "$12.00",
        ingredients: {
          ru: "ингредиент1, ингредиент2",
          en: "ingredient1, ingredient2",
          kg: "ингредиент1, ингредиент2",
        },
        image: "/images/шоколад.png",
      },
    ],
    "Fast foods": [
      {
        name: {
          ru: "Бургер",
          en: "Burger",
          kg: "Бургер",
        },
        price: "$5.00",
        ingredients: {
          ru: "булочка, говядина, салат",
          en: "bun, beef, lettuce",
          kg: "нандын, уй эт, жапалак",
        },
        image: "/images/шоколад.png",
      },
    ],
  };

  const [selectedCategory, setSelectedCategory] =
    useState<MenuCategory>("Desserts");

  const handleCategoryClick = (category: MenuCategory) => {
    setSelectedCategory(category);
  };
  const { t } = useLanguageStore();

  return (
    <div className="container">
      <div className={scss.menuContainer}>
        <div className={scss.sidebar}>
          <ul className={scss.categoryList}>
            {categories.map((category) => (
              <li
                key={category}
                className={`${scss.categoryItem} ${
                  category === selectedCategory ? scss.activeCategory : ""
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className={scss.itemsContainer}>
          {allItems[selectedCategory].map((item, index) => (
            <div key={index} className={scss.itemCard}>
              <img
                src={item.image}
                alt={item.name.ru} // Используйте нужный перевод в зависимости от языка
                className={scss.itemImage}
              />
              <div className={scss.itemDetails}>
                <div className={scss.itemH}>
                  <h3>{item.name.ru}</h3>{" "}
                  {/* Используйте нужный перевод в зависимости от языка */}
                  <p>{item.ingredients.ru}</p>{" "}
                  {/* Используйте нужный перевод в зависимости от языка */}
                </div>
                <div className={scss.itemSpam}>
                  <span className={scss.itemPrice}>{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
