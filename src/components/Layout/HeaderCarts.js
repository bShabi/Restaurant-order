import classes from "./HeaderCarts.module.css";
import CartIcon from "../Carts/CartIcon";
import {useContext,useEffect,useState} from "react";
import cartContext from "../../store/cart-context";

const HeaderCartButton = props => {
    const [btnIsHightLighted,setBtnIsHightLighted]  = useState(false)
    const {items} = useContext(cartContext)

    const itemsReducer = items.reduce((currrentNum,item) => {
        return currrentNum + item.amount
    },0)

    const btnClasses = `${classes.button} ${btnIsHightLighted ? classes.bump : ''}`

    useEffect(() => {
        if(items.length === 0) {
            return
        }
        setBtnIsHightLighted(true)
       const timer =  setTimeout(() => {
            setBtnIsHightLighted(false)
        },[300])

        return () => {
            clearTimeout(timer)
        }
    },[items])

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>{props.children}</span>
        <span className={classes.badge}>
        {itemsReducer}
        </span>
    </button>

}
export default  HeaderCartButton