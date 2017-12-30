import React from "react";
import { BackdropStyle } from "./Backdrop.css";

const Backdrop = props => props.show
    ? <div className={BackdropStyle}></div>
    : null;

export default Backdrop;