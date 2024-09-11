import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const FoodCard = () => {
  const { data, addToCart } = useContext(CounterContext)
  return (
    <div id="meals">
      {data.map((item) => (
        <div key={item.id} className="meal-item ">
          <img src={`http://localhost:3000${item.image}`} alt={item.name} />
          <h3>{item.name}</h3>
          <p className="meal-item-price">${item.price}</p>
          <article className="meal-item-description">
            {item.description}
          </article>         
          <div className="meal-item-actions">
            <button className="button" onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCard;
