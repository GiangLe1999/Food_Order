import React, { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "../components/UI/Button";
import { CartContext } from "../store/CartContext";
import { UserProgressContext } from "../store/UserProgressContext";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce(
    (acc, cur) => acc + cur.quantity,
    0
  );

  const showCartHandler = () => {
    userProgressCtx.showCart();
  };

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Giang Food Logo" />
        <h1>GiangFood</h1>
      </div>
      <nav>
        <Button onClick={showCartHandler} textOnly>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
