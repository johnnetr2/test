import GridLayout from "../../GridOrg/GridLayout";
import BottomNavBar from "../../../molecule/BottomNavBar/BottomNavBar";
import LeftBar from "../../LeftBarOrg/LeftBar";
import MessageFeedContent from "../MessageFeedContent/MessageFeedContent";
import React from "react";

const MessageMain = () => {
  return (
    <GridLayout
      leftBar={<LeftBar />}
      middle={<MessageFeedContent />}
      bottomNav={<BottomNavBar />}
    />
  );
};

export default MessageMain;
