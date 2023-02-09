import BottomNavBar from "../../molecule/BottomNavBar/BottomNavBar";
import React from "react";
import Pricing from "./Pricing";
import LeftBar from "../LeftBarOrg/LeftBar";
import HomeLeftBar from "../HomeOrg/HomeLeftBar/HomeLeftBarV0";
import GridLayout from "../GridOrg/GridLayout";

const PaymentMain = () => {
  return (
    <GridLayout
      leftBar={<HomeLeftBar />}
      middle={<Pricing />}
      bottomNav={<BottomNavBar currentPage="checkout" />}
    />
  );
};

export default PaymentMain;
