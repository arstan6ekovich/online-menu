"use client"; // добавьте это в начало файла

import { useState } from "react";
import scss from "./Menu.module.scss";

const Menu = () => {
  const categories = [
    "Desserts",
    "Hot Drinks",
    "Cold Drinks",
    "National Foods",
    "Eastern cuisine",
    "Fast foods",
  ];

  const allItems = {
    Desserts: [
      { name: "Ice Cream", price: "$9.11", ingredients: "soda,cream,milk,sugar", image: "image-url-1" },
      { name: "Cake", price: "$12.99", ingredients: "flour,sugar,butter", image: "image-url-2" },
    ],
    "Hot Drinks": [
      { name: "Coffee", price: "$3.50", ingredients: "coffee,water,sugar", image: "image-url-3" },
      { name: "Tea", price: "$2.50", ingredients: "tea,water", image: "image-url-4" },
    ],
    "Cold Drinks": [
      { name: "Iced Coffee", price: "$4.00", ingredients: "coffee,ice,milk", image: "image-url-5" },
      { name: "Soda", price: "$2.00", ingredients: "carbonated water,sugar", image: "image-url-6" },
    ],
    // Add other categories similarly...
  };

  const [selectedCategory, setSelectedCategory] = useState("Desserts");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={scss.menuContainer}>
      <div className={scss.sidebar}>
        <ul className={scss.categoryList}>
          {categories.map((category, index) => (
            <li
              key={index}
              className={`${scss.categoryItem} ${category === selectedCategory ? scss.activeCategory : ""}`}
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
              <h3>{item.name}</h3>
              <p>{item.ingredients}</p>
              <span className={scss.itemPrice}>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
