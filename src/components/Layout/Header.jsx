import React from "react";
import burgerImg from "../../assets/burger-4369973_1920.jpg"
// import burgerSmallImg from "../../assets/burger-4369973_640.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
return (
    <>
    <header className={classes.header}>
        <h1>Murek Meals - get full&happy today!</h1>
        <HeaderCartButton onClick={props.onShowCart} />
    </header>
    <div className={classes['main-image']} >
        <img src={burgerImg}  alt="delicious meal - including burger and french fries" />
    </div>
    
    </>
)
}

export default Header