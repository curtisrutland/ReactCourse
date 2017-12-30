import React from "react";
import classes from "./Modal.css";

const Modal = props => {
    let classNames = classes.Modal;
    if(!props.show)
        classNames += ` ${classes.Hidden}`;;
    return (
        <div className={classNames}>
            {props.children}
        </div>
    );
};

export default Modal;