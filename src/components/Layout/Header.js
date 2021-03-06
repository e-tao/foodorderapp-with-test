import { Fragment } from "react";
import HeaderCardButton from "./HeaderCartButton";

import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'


const Header = props =>{
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Smart Choice Meals</h1>
                <HeaderCardButton />
            </header>
            <div className={classes['main-image']} data-testid = 'headerImg'>
                <img src={mealsImage} alt="A table full of delicious food!"/>
            </div>
        </Fragment>
    )
};

export default Header;