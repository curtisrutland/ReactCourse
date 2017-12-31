import React from "react";
import logoPath from "../../../assets/images/burger-logo.png";
import classes from "./Logo.css";

const Logo = props => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={logoPath} alt="Burger Logo" />
    </div>
);

export default Logo;