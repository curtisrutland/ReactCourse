import React, { Fragment } from "react";
import classes from "./OrderSummary.css";

const OrderSummary = props => {
    const summary = Object.keys(props.ingredients)
        .map(key => {
            return (
                <li key={key}>
                    <span className={classes.Capitalize}>{key}
                    </span>: {props.ingredients[key]}
                </li>
            );
        });
    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A burger with the following ingredients:</p>
            <ul>{summary}</ul>
            <p>Continue to Checkout?</p>
        </Fragment>
    );
};

export default OrderSummary;