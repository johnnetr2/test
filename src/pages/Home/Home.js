import React, { useState, useEffect } from "react";
import HomeMainOrg from "../../components/organism/HomeOrg/HomeMain/HomeMain";
import StartPopup from "../../components/molecule/StartPopup/StartPopup";
import EndPopup from "../../components/molecule/EndPopup/EndPopup";
import {
  EndPoints,
  instance2,
  instance3,
} from "../../components/service/Route";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { MixpanelTracking } from "../../tools/mixpanel/Mixpanel";

const Home = () => {
  const [firstPopup, setFirstPopup] = useState("");
  const [secondPopup, setSecondPopup] = useState("");
  const { user, token } = useSelector((state) => state.value);
  const [collection, setCollection] = useState({
    season: "",
    gpa: "",
    StudentPreference: "",
    userId: localStorage.getItem("userId"),
  });

  useEffect(async () => {
    MixpanelTracking.getInstance().login("success", localStorage.getItem("userId"));
    const userId = await localStorage.getItem("userId");
    const URL = EndPoints.getStudentPreference + userId;
    instance2.get(URL).then((response) => {
      if (response?.data?.StudentPreference) {
        setCollection({
          ...collection,
          StudentPreference: response.data.StudentPreference,
        });
        setFirstPopup(false);
      } else {
        setFirstPopup(true);
      }
    });
  }, []);

  const sendData = async () => {
    const payLoad = {
      season: collection.season,
      point: collection.gpa ? collection.gpa : 1,
      user: localStorage.getItem("userId"),
    };
    const URL = EndPoints.testDate;
    await instance2.post(URL, payLoad).then((response) => {
      if (response?.data?.StudentPreference) {
        setCollection({ StudentPreference: response.data.StudentPreference });
        setSecondPopup(false);
      }
    });
  };
  const submitFunc = () => {
    setFirstPopup(false);
    setSecondPopup(true);
  };

  return (
    <div>
      <StartPopup
        onTestSelection={(value) =>
          setCollection({ ...collection, season: value })
        }
        showPopup={firstPopup}
        hidePopup={() => setFirstPopup(false)}
        submit={submitFunc}
      />
      <EndPopup
        onSliderChange={(value) => {
          setCollection({ ...collection, gpa: value });
        }}
        showPopup={secondPopup}
        hidePopup={() => setSecondPopup(false)}
        submit={sendData}
      />
      <HomeMainOrg
        StudentPreference={
          collection?.StudentPreference && collection?.StudentPreference
        }
      />
    </div>
  );
};

export default Home;
