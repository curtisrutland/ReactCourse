import React from "react";
import { BackdropStyle } from "./Backdrop.css";

const Backdrop = props => props.show
    ? <div 
        className={BackdropStyle}
        onClick={props.clicked}></div>
    : null;

export default Backdrop;