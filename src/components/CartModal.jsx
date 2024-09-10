import React from "react";

const CartModal = ({ cartItems, toggleCart }) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="modal">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <p>{item.name} - {item.quantity} x ${item.price}</p>
            <div className="cart-item-actions">
              <button>-</button>
              <span>{item.quantity}</span>
              <button>+</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <p>Total: ${totalAmount}</p>
      </div>
      <div className="modal-actions">
        <button className="text-button" onClick={toggleCart}>Close</button>
        <button className="button">Go to Checkout</button>
      </div>
    </div>
  );
};

export default CartModal;
