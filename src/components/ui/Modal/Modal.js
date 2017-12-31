import React, { Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.css";

const Modal = props => {
    let classNames = classes.Modal;
    if (!props.show)
        classNames += ` ${classes.Hidden}`;;
    return (
        <Fragment>
            <Backdrop 
                show={props.show}
                clicked={props.modalClosed} />
            <div className={classNames}>
                {props.children}
            </div>
        </Fragment>
    );
};

export default Modal;