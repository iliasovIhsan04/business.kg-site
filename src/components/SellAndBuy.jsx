import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const regions = [
  {
    id: 1,
    name: "Марка",
    brands: [
      "Toyota",
      "Kia",
      "Hyundai",
      "BMW",
      "Geely",
      "Nissan",
      "Ford",
      "Mercedes_Benz",
      "Volkswagen",
    ],
  },
  {
    id: 2,
    name: "Марка",
    brands: [
      "Toyota",
      "Kia",
      "Hyundai",
      "BMW",
      "Geely",
      "Nissan",
      "Ford",
      "Mercedes_Benz",
      "Volkswagen",
    ],
  },
  {
    id: 3,
    name: "Год от",
    brands: [
      "Toyota",
      "Kia",
      "Hyundai",
      "BMW",
      "Geely",
      "Nissan",
      "Ford",
      "Mercedes_Benz",
      "Volkswagen",
    ],
  },
  {
    id: 4,
    name: "Цена от, $",
    brands: [
      "Toyota",
      "Kia",
      "Hyundai",
      "BMW",
      "Geely",
      "Nissan",
      "Ford",
      "Mercedes_Benz",
      "Volkswagen",
    ],
  },
  {
    id: 5,
    name: "Цена до, $",
    brands: [
      "Toyota",
      "Kia",
      "Hyundai",
      "BMW",
      "Geely",
      "Nissan",
      "Ford",
      "Mercedes_Benz",
      "Volkswagen",
    ],
  },
];

const SellAndBuy = () => {
  const handleClick = (e) => {
    e.stopPropagation();
    document.getElementById("regions-select").focus();
  };

  return (
    <div className="sell-and-buy">
      <div className="container">
        <h2 className="sell-and-buy-title">
          Продать и купить авто в Кыргызстане
        </h2>
        <div className="d-f-center sell-and-buy-filter-box">
          <div className="sell-and-buy-filter">
            {regions.map((region, regionIndex) => (
              <div
                key={regionIndex}
                className="sell-and-buy-filter-line filter-select-block select-container"
                onClick={handleClick}
              >
                <p className="car-mark">{region.name}</p>
                <select
                  name="regions"
                  id="regions-select"
                  className="filter-select"
                  onClick={(e) => e.stopPropagation()}
                >
                  {region.brands.map((brand, index) => (
                    <option key={index} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
                <IoIosArrowDown size={24} className="icon-select" />
              </div>
            ))}
          </div>
          <button className="find-btn">Найти</button>
        </div>
      </div>
    </div>
  );
};

export default SellAndBuy;
