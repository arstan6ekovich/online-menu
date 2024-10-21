"use client";

import { useState } from "react";
import scss from "./MenuPage.module.scss";
type MenuItem = {
  name: string;
  price: string;
  ingredients: string;
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
        name: "Ice Cream",
        price: "$9.11",
        ingredients: "soda, cream, milk, sugar",
        image: "/images/шоколад.png",
      },
      {
        name: "Ice Cream",
        price: "$12.99",
        ingredients: "flour, sugar, butter",
        image: "/images/мороженное.png",
      },
      {
        name: "Ice Cream",
        price: "$12.99",
        ingredients: "flour, sugar, butter",
        image: "/images/мороженноуСШоколадом.png",
      },
      {
        name: "Ice Cream",
        price: "$12.99",
        ingredients: "flour, sugar, butter",
        image: "/images/красныйШоколад.png",
      },
      {
        name: "Ice Cream",
        price: "$12.99",
        ingredients: "flour, sugar, butter",
        image: "/images/фруктовыйКоктейл.png",
      },
      {
        name: "Ice Cream",
        price: "$12.99",
        ingredients: "flour, sugar, butter",
        image: "/images/сок.png",
      },
    ],
    "Hot Drinks": [
      {
        name: "Coffee",
        price: "$3.50",
        ingredients: "coffee, water, sugar",
        image: "/images/шоколад.png",
      },
      {
        name: "Tea",
        price: "$2.50",
        ingredients: "tea, water",
        image: "/images/шоколад.png",
      },
    ],
    "Cold Drinks": [
      {
        name: "Iced Coffee",
        price: "$4.00",
        ingredients: "coffee, ice, milk",
        image: "/images/шоколад.png",
      },
      {
        name: "Soda",
        price: "$2.00",
        ingredients: "carbonated water, sugar",
        image: "/images/шоколад.png",
      },
    ],
    "National Foods": [
      {
        name: "National Dish 1",
        price: "$10.00",
        ingredients: "ingredient1, ingredient2",
        image: "/images/шоколад.png",
      },
    ],
    "Eastern cuisine": [
      {
        name: "Eastern Dish 1",
        price: "$12.00",
        ingredients: "ingredient1, ingredient2",
        image: "/images/шоколад.png",
      },
    ],
    "Fast foods": [
      {
        name: "Burger",
        price: "$5.00",
        ingredients: "bun, beef, lettuce",
        image: "/images/шоколад.png",
      },
    ],
  };

  const [selectedCategory, setSelectedCategory] =
    useState<MenuCategory>("Desserts");

  const handleCategoryClick = (category: MenuCategory) => {
    setSelectedCategory(category);
  };

  return (
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
            <img src={item.image} alt={item.name} className={scss.itemImage} />
            <div className={scss.itemDetails}>
              <div className={scss.itemH}>
                <h3>{item.name}</h3>
                <p>{item.ingredients}</p>
              </div>
              <div className={scss.itemSpam}>
                <span className={scss.itemPrice}>{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
