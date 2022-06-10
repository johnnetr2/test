import React, { useState, useEffect } from "react";
import HomeMainOrg from "../../components/organism/HomeOrg/HomeMain/HomeMain";
import StartPopup from "../../components/molecule/StartPopup/StartPopup";
import EndPopup from "../../components/molecule/EndPopup/EndPopup";
import { EndPoints, instance2 } from "../../components/service/Route";

const Home = () => {

  const [firstPopup, setFirstPopup] = useState("");
  const [secondPopup, setSecondPopup] = useState("");
  const [collection, setCollection] = useState({
    date: '',
    gpa: '',
    // userId: '61d44d9ca94c4e0398b040da'
    userId: localStorage.getItem('userId'),
  })
  useEffect(() => {

    const URL = EndPoints.getStudentPreference + localStorage.getItem('userId')
  instance2.get(URL).then(response => {
    if (response.data.StudentPreference) {
      setFirstPopup(false);
    } else {
      setFirstPopup(true);
    }
  })

  }, []);

  const data = {
    attemptDate: collection.date,
    point: collection.gpa,
    user: collection.userId,
  }

  const URL = EndPoints.testDate
  function sendData() {
    instance2.post(URL, data, {
    }).then((response) => {
      if (response.data.StudentPreference) {
        setSecondPopup(false)
      }
    })
  }
  const submitFunc = () => {
    setFirstPopup(false)
    setSecondPopup(true)
  }

  return (
    <div>
      <StartPopup onDateChange={(value) => setCollection({ ...collection, date: value })} showPopup={firstPopup} hidePopup={() => setFirstPopup(false)} submit={submitFunc} />
      <EndPopup onSliderChange={(value) => { setCollection({ ...collection, gpa: value }) }} showPopup={secondPopup} hidePopup={() => setSecondPopup(false)} submit={sendData} />
      <HomeMainOrg />
    </div>
  );
};

export default Home;
