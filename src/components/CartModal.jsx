import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const CartModal = () => {
  const {
    cartItems,
    toggleCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useContext(CounterContext);
  const totalAmount = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="modal">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <p>
              {item.name} - {item.quantity} x ${item.price}
            </p>
            <div className="cart-item-actions">
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button
                onClick={() => removeItem(item.id)}
                style={{ color: "red" }}
              >
                &#128473;
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <p>Total: ${totalAmount}</p>
      </div>
      <div className="modal-actions">
        <button className="text-button" onClick={toggleCart}>
          Close
        </button>
        <button className="button">Go to Checkout</button>
      </div>
    </div>
  );
};

export default CartModal;
