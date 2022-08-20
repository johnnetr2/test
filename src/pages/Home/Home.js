import React, { useState, useEffect } from "react";
import HomeMainOrg from "../../components/organism/HomeOrg/HomeMain/HomeMain";
import StartPopup from "../../components/molecule/StartPopup/StartPopup";
import EndPopup from "../../components/molecule/EndPopup/EndPopup";
import { EndPoints, instance2 } from "../../components/service/Route";

const Home = (props) => {
  const [firstPopup, setFirstPopup] = useState("");
  const [secondPopup, setSecondPopup] = useState("");
  const [collection, setCollection] = useState({
    season: "",
    gpa: "",
    StudentPreference: "",
    userId: localStorage.getItem("userId"),
  });

  useEffect(() => {
    const URL = EndPoints.getStudentPreference + localStorage.getItem("userId");
    instance2.get(URL).then((response) => {
      if (response.data.StudentPreference) {
        setFirstPopup(false);
      } else {
        setFirstPopup(true);
      }
    });
  }, []);

  const data = {
    season: collection.season,
    point: collection.gpa ? collection.gpa : 1,
    user: collection.userId,
  };

  const URL = EndPoints.testDate;
  function sendData() {
    instance2.post(URL, data, {}).then((response) => {
      if (response?.data?.StudentPreference) {
        setCollection({
          ...collection,
          StudentPreference: response.data.StudentPreference,
        });
        setSecondPopup(false);

        window.location.reload();
      }
    });
  }
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
          collection.StudentPreference && collection.StudentPreference
        }
      />
    </div>
  );
};

export default Home;
