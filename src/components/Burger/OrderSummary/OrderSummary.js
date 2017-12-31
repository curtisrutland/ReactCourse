import React, { Fragment, Component } from "react";
import classes from "./OrderSummary.css";
import Button from "../../ui/Button/Button";

/// could be made a functional component; done this way to illustrate that you can conditionally trigger
/// updates in a cascading fashion
class OrderSummary extends Component {
    renderIngredients = () => Object.keys(this.props.ingredients)
        .map(key => {
            return (
                <li key={key}>
                    <span className={classes.Capitalize}>{key}
                    </span>: {this.props.ingredients[key]}
                </li>
            );
        });

    // componentWillUpdate() {
    //     console.log("[OrderSummary], componentWillUpdate()");
    // }

    render() {
        console.log("[OrderSummary]: render()");
        return (
            <Fragment>
                <h3>Your Order</h3>
                <p>A burger with the following ingredients:</p>
                <ul>{this.renderIngredients()}</ul>
                <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button type="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button type="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Fragment>
        )
    }
}

export default OrderSummary;