import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderAction";
import StripeCheckout from "react-stripe-checkout";

const Stripe = ({ subtotal }) => {

    const dispatch = useDispatch();
    function handleToken(token) {
        console.log(token);
        dispatch(placeOrder(token, subtotal));
    }

    return (
        <div style={{ border: '1px solid black',backgroundColor:'lightgreen', borderRadius: '5px', textAlign: 'center', cursor: 'pointer', width: '40%' }} className="my-3 mx-3" >

            <StripeCheckout
                amount={subtotal * 100}
                shippingAddress
                token={handleToken}
                stripeKey="pk_test_51Ke1y8BqKFY6FfkjLSaFpJDJ41yAYRWED4ouvMW0fJD9m86aMRmrK5XmpJshHq8szTaKla0Hq8cC8pqgmZ7AK1YL00k7F60nnc"
                currency="INR"
            >
                <button className="btn">Pay Now</button>
            </StripeCheckout>

        </div >
    )
}

export default Stripe