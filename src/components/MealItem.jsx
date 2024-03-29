import React, { useContext } from "react";
import { currencyFormatter } from "../utils/formatting";
import { CartContext } from "../store/CartContext";
import Button from "./UI/Button";

const MealItem = ({ meal }) => {
  const { addItem } = useContext(CartContext);

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div className="">
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={() => addItem(meal)}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
