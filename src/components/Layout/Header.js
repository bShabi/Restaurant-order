import React from "react";
import mealImage from '../../assets/meals.jpeg'
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCarts";
const Header = props => {
    return <>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={mealImage} alt='a table full derelition food!'/>
        </div>
    </>
}
export  default  Header