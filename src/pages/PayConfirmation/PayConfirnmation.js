import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomModal from "./Modal";
import { EndPoints, instance2 } from "../../components/service/Route";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const PayConfirmation = () => {
  const order_id = localStorage.getItem("order_id");
  // Set true and false here for testing the UI
  const [isComplete, setIsComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const completionCheck = () => {
    if (order_id) {
      //Make a GET request to our API to see if this order_id is completed. Set isComplete to true

      instance2.get(EndPoints.getOrder + order_id).then(res => {
        setIsComplete(true)
        localStorage.setItem("isPremium", true)
        setIsLoading(false)
      }).catch(err => {
        console.log("error", err)
        console.log("Error", "Something went wrong from backend!")
        setIsLoading(false)

      })
    } else {
      setIsLoading(false)
      console.log("Error", "Order id not found")
      //Handle error and set isComplete to false
    }
  };

  useEffect(() => {
    completionCheck()
  }, [])


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
    <>
      {
        isLoading ?
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }
            }
            open={isLoading}
          >
            <CircularProgress color="inherit" size="5rem" />
          </Backdrop >
          :
          <CustomModal
            order_id={order_id}
            handleClose={handleClose}
            isComplete={isComplete}
          />
      }
    </>
  );
};

export default PayConfirmation;
