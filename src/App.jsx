import React, { useContext } from "react";
import Header from "./components/Header";
import CartModal from "./components/CartModal";
import { CounterContext } from "./context/CounterContext";
import FoodCard from "./components/FoodCard";

function App() {
  const { showCart } = useContext(CounterContext);

  return (
    <>
      <Header />
      <FoodCard />
      {showCart && <CartModal />}
    </>
  );
}

export default App;
