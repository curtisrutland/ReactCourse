import React, { Fragment } from "react";
import Logo from "../../ui/Logo/Logo";
import NavItems from "../NavItems/NavItems";
import Backdrop from "../../ui/Backdrop/Backdrop";
import classes from "./SideDrawer.css";

const SideDrawer = props => {
    const classNames = `${classes.SideDrawer} ${props.open ? classes.Open : classes.Close}`;
    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={classNames}>
                <div className={classes.Logo}><Logo /></div>
                <nav>
                    <NavItems />
                </nav>
            </div>
        </Fragment>
    );
}

export default SideDrawer;