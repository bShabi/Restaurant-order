import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useContext } from "react";
import cartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(cartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
  cartCtx.removeItem(id)

  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item,amount:1})
  };

  const cartItem = (
    <ul className={classes["cart-item"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null,item)}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
        />
      ))}
    </ul>
  );

  return (
    <>
      <Modal onCloseModal={props.onHide}>
        {cartItem}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onHide}>
            close
          </button>{" "}
          {hasItems && <button className={classes.button}>Order</button>}
        </div>
      </Modal>
      ;
    </>
  );
};

export default Cart;
