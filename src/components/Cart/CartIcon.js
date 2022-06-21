import Icon from "../../assets/shopping-cart.png";
import classes from "./CartIcon.module.css";

const CartIcon = () => {
  return <img src={Icon} className={classes.icon} alt="" />;
};

export default CartIcon;
