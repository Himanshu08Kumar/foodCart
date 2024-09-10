import React, { useState, useEffect } from "react";
import FoodItemDetail from './components/FoodItemDetail';
import Header from './components/Header';
import CartModal from './components/CartModal';

function App() {
  const [cartItems, setCartItems] = useState([]); // Track cart items
  const [showCart, setShowCart] = useState(false); // Toggle cart modal
  const [data, setData] = useState([]); // Fetch meals data from backend

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/meals/"); // Adjust to your API endpoint
        const meals = await response.json();
        setData(meals);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };
    fetchData();
  }, []);

  // Function to handle adding items to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const increaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <Header cartCount={cartItems.length} toggleCart={toggleCart} />
      <FoodItemDetail foodData={data} addToCart={addToCart} />
      {showCart && 
      <CartModal 
      cartItems={cartItems} 
      toggleCart={toggleCart} 
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      removeItem={removeItem}
      />}
    </>
  );
}

export default App;
