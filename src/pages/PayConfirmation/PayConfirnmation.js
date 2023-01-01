import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomModal from "./Modal";

const PayConfirmation = () => {
  const [isComplete, setIsComplete] = useState();

  const order_id = localStorage.getItem("order_id");

  const completionCheck = () => {
    if (order_id) {
      //Make a GET request to Klarna API to see if this order_id is completed
      setIsComplete(true);
    } else {
      //Handle error
    }
  };

  const navigate = useNavigate();

  const handleClose = async () => {
    // 1. Update user to Premium
    //POST request?
    await console.log("Update user data");

    // 2. Navigate user to dashboard/home page
    navigate("/home");
  };

  return <CustomModal order_id={order_id} handleClose={handleClose} />;
};

export default PayConfirmation;
