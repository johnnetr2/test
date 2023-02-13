import { useState } from "react";
import GridLayout from "../../GridOrg/GridLayout";
import BottomNavBar from "../../../molecule/BottomNavBar/BottomNavBar";
import HomeFeedContent from "../HomeFeedContent/HomeFeedContent";
import LeftBar from "../../LeftBarOrg/LeftBar";
import HomeRightBar from "../HomeRightBar/HomeRightBar";

const HomeMainOrg = (props) => {
  const [totalPrognos, setTotalPrognos] = useState(0);
  return (
    <GridLayout
      leftBar={<LeftBar currentPage="home" />}
      middle={
        <HomeFeedContent
          getPrognos={(e) => setTotalPrognos(e)}
          studentPreference={
            props?.StudentPreference && props?.StudentPreference
          }
        />
      }
      rightBar={
        <HomeRightBar
          totalPrognos={totalPrognos && totalPrognos}
          studentPreference={
            props?.StudentPreference && props?.StudentPreference
          }
        />
      }
      bottomNav={<BottomNavBar currentPage="home" />}
    />
  );
};

export default HomeMainOrg;
