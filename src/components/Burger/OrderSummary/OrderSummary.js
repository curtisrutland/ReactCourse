import React, { Fragment } from "react";
import classes from "./OrderSummary.css";
import Button from "../../ui/Button/Button";

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
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button type="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button type="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Fragment>
    );
};

export default OrderSummary;