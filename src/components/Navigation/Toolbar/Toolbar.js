import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../ui/Logo/Logo";
import NavItems from "../NavItems/NavItems";

const Toolbar = props => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav>
            <NavItems />
        </nav>
    </header>
);

export default Toolbar;