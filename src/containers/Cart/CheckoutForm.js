import React from "react";
import { useDispatch } from "react-redux";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import { checkAuthStatus } from "../../store/actions/authActions/authActions";
import { loadingToggler } from "../../store/actions/commonActions/commonActions";

const CheckoutForm = (props) => {
  const dispatch = useDispatch();

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    props.onSubmit();
    dispatch(loadingToggler(true));

    if (!stripe || !elements) {
      return;
    }

    const user = await checkAuthStatus();

    const result = await stripe.confirmCardPayment(`${props.clientSecret}`, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: user.displayName,
        },
      },
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      props.onError(result.error);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === "succeeded") {
        props.onSuccess(result.paymentIntent);
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button className="btn btn-block btn-success my-2" disabled={!stripe}>
        Confirm order
      </button>
    </form>
  );
};

export default CheckoutForm;
