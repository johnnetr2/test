import React, { useState, useEffect } from "react";
import HomeMainOrg from "../../components/organism/HomeOrg/HomeMain/HomeMain";
import StartPopup from "../../components/molecule/StartPopup/StartPopup";
import EndPopup from "../../components/molecule/EndPopup/EndPopup";

const Home = () => {
  
  const [firstPopup, setFirstPopup] = useState("");
  const [secondPopup, setSecondPopup] = useState("");

  useEffect(() => {
    setFirstPopup(true);
  }, []);

  const submitFunc = () => {
    setFirstPopup(false)
    setSecondPopup(true)
}

  return (
    <div>
      <StartPopup showPopup = {firstPopup} hidePopup = {() => setFirstPopup(false)} submit = {submitFunc} />
      <EndPopup showPopup = {secondPopup} hidePopup = {() => setSecondPopup(false)} submit = {() => setSecondPopup(false)} />
      <HomeMainOrg />
    </div>
  );
};

export default Home;
