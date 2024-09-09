import React, { useState, useEffect } from "react";
import data1 from "../../backend/data/available-meals.json";

const FoodItemDetail = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("../../backend/data/available-meals.json");
      const meals = await response.json();
      setData(meals);
    };
    fetchData();
  }, []);
  
  return (
    <div id="meals">
      {data.map((item) => (
        <div key={item.id} className="meal-item">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p className="meal-item-price">Price: ${item.price}</p>
          <article className="meal-item-description">{item.description}</article>
        </div>
      ))}
    </div>
  );
};

export default FoodItemDetail;
