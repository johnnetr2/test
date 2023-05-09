import BottomNavBar from "../../molecule/BottomNavBar/BottomNavBar";
import React from "react";
import Pricing from "./Pricing";
import LeftBar from "../LeftBarOrg/LeftBar";
import GridLayout from "../GridOrg/GridLayout";

const PaymentMain = () => {
  return (
    <GridLayout
      leftBar={<LeftBar />}
      middle={<Pricing />}
      bottomNav={<BottomNavBar currentPage="checkout" />}
    />
  );
};

export default PaymentMain;
