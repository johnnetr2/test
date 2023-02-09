import GridLayout from "../../GridOrg/GridLayout";
import BottomNavBar from "../../../molecule/BottomNavBar/BottomNavBar";
import LeftBar from "../../LeftBarOrg/LeftBar";
import HomeLeftBar from "../../HomeOrg/HomeLeftBar/HomeLeftBarV0";
import MessageFeedContent from "../MessageFeedContent/MessageFeedContent";
import React from "react";

const MessageMain = () => {
  return (
    <GridLayout
      leftBar={<HomeLeftBar />}
      middle={<MessageFeedContent />}
      bottomNav={<BottomNavBar />}
    />
  );
};

export default MessageMain;
