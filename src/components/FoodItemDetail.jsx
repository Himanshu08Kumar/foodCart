import React from "react";
import FoodCard from "./FoodCard";

const FoodItemDetail = ({ foodData, addToCart }) => {
  return (
    <>
      <FoodCard foodData={foodData} addToCart={addToCart} />
    </>
  );
};

export default FoodItemDetail;
