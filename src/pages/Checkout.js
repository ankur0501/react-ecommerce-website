import React, { useState, useReducer, useContext } from "react";
import { useHistory } from "react-router-dom";
import CartContext from "../context/cart";
import UserForm from "../components/UserForm";
import ShippingForm from "../components/ShippingForm";
import ConfirmDetails from "../components/ConfirmDetails";
import PlaceOrder from "../components/PlaceOrder";
import "./Checkout.css"; // External styling

function getSteps() {
  return [
    "Enter personal details",
    "Shipping address",
    "Confirm details",
    "Place order",
  ];
}

function getStepContent(step, handleChange, state) {
  switch (step) {
    case 0:
      return <UserForm handleChange={handleChange} state={state} />;
    case 1:
      return <ShippingForm handleChange={handleChange} state={state} />;
    case 2:
      return <ConfirmDetails state={state} />;
    case 3:
      return <PlaceOrder />;
    default:
      return "Unknown step";
  }
}

function checkoutReducer(state, action) {
  if (action.type === "changed") {
    return {
      ...state,
      [action.key]: action.value,
    };
  }
  return state;
}

export const Checkout = () => {
  const history = useHistory();
  const cart = useContext(CartContext);
  const [activeStep, setActiveStep] = useState(0);
  const [state, dispatch] = useReducer(checkoutReducer, {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });

  const steps = getSteps();

  const handleChange = ({ name, value }) => {
    dispatch({ type: "changed", key: name, value });
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      history.push("/order-success");
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="checkout-container">
      <ul className="stepper">
        {steps.map((step, index) => (
          <li key={index} className={index === activeStep ? "active" : ""}>
            {step}
          </li>
        ))}
      </ul>

      <div className="step-content">
        {activeStep === steps.length ? (
          <button className="button" onClick={handleReset}>
            Reset
          </button>
        ) : (
          <>
            {getStepContent(activeStep, handleChange, state)}
            <div className="navigation-buttons">
              <button
                className="button"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                Back
              </button>
              <button className="button primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Place Order" : "Next"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
