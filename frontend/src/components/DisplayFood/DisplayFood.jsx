import React, { useContext } from "react";
import "./DisplayFood.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const DisplayFood = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="display-food" id="display-food">
      <h2>Top dishes near you</h2>
      <div className="display-food-list">
        {food_list.map((item, index) => {
          if (category === "all" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default DisplayFood;
