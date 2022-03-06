import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Carts/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartShow, setIsCartShow] = useState(false);

  const showCartHandler = () => {
    setIsCartShow(true);
  };
  const hideCartHandler = () => {
    setIsCartShow(false);
  };

  return (
    <CartProvider>
      {isCartShow && <Cart onHide={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
