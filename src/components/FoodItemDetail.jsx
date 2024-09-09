import React, { useState, useEffect } from "react";
import FoodCard from "./FoodCard";

const FoodItemDetail = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/meals/");
      const meals = await response.json();
      setData(meals);
    };
    fetchData();
  }, []);

  return (
    <>
      <FoodCard foodData={data} />
    </>
  );
};

export default FoodItemDetail;
