import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomModal from "./Modal";

const PayConfirmation = () => {
  const order_id = localStorage.getItem("order_id");
  // Set true and false here for testing the UI
  const [isComplete, setIsComplete] = useState(false);

  const completionCheck = () => {
    if (order_id) {
      //Make a GET request to our API to see if this order_id is completed. Set isComplete to true
    } else {
      //Handle error and set isComplete to false
    }
  };

  const navigate = useNavigate();

  const handleClose = async () => {
    // If paymentCompleted, navigate user to dashboard/home page
    if (isComplete === true) {
      navigate("/home");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <CustomModal
      order_id={order_id}
      handleClose={handleClose}
      isComplete={isComplete}
    />
  );
};

export default PayConfirmation;
