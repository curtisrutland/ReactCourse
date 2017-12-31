import React, { Fragment, Component } from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.css";

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate(){
        console.log("[Modal] componentWillUpdate()");
    }

    getClassNames = () => `${classes.Modal} ${this.props.show ? null : classes.Hidden}`;

    render() {
        return (
            <Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div className={this.getClassNames()}>
                    {this.props.children}
                </div>
            </Fragment>
        );
    }
}

export default Modal;