import React from "react";

const FoodCard = ({ foodData }) => {
  return (
    <>
      <div id="meals">
        {foodData.map((item) => (
          <div key={item.id} className="meal-item ">
            <img src={`http://localhost:3000${item.image}`} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="meal-item-price">${item.price}</p>
            <article className="meal-item-description">
              {item.description}
            </article>         
            <div className="meal-item-actions">
            <button className="button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FoodCard;
