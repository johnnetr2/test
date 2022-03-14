import React from "react";
import { Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses/Courses";
import Profile from "./pages/Profile/Profile";
import Message from "./pages/Message/Message";
import Logout from "./pages/Logout/Logout";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import './App.css'
import ResultInformation from "./components/organism/CoursesOrg/CoursePages/ResultInformation/ResultInformation";
import ProvPassInformation from "./components/organism/CoursesOrg/CoursePages/ProvPassInformation/ProvPassInformation";
import ResultSummaryOrg from "./components/organism/HomeOrg/HomePages/QuestionPages/ResultSummaryOrg/ResultSummaryOrg";
import StandardViewXyz from "./components/organism/CoursesOrg/CoursePages/StandardViewXyz/StandardViewXyz";
import ProvPassNog from "./components/organism/CoursesOrg/CoursePages/ProvPassNog/ProvPassNog";
import ProvPassDtk from "./components/organism/CoursesOrg/CoursePages/ProvPassDtk/ProvPassDtk";
import OverBlick from "./components/organism/CoursesOrg/CoursePages/OverBlick/OverBlick";
import ProvPassCorrectAns from "./components/organism/CoursesOrg/CoursePages/ProvPassCorrectAns/ProvPassCorrectAns";
import CategoryPagesMain from "../src/components/organism/HomeOrg/HomePages/CategoryPages/CategoryPagesMain/CategoryPagesMain";
import Home from "./pages/Home/Home";
import QuestionViewXyzOrg from "./components/organism/HomeOrg/HomePages/QuestionPages/QuestionViewXyzOrg/QuestionViewXyzOrg";
import FeedbackCard from './components/molecule/FeedbackCard/FeedbackCard'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/feedback" element={<FeedbackCard />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="profile" element={<Profile />} />
        <Route path="message" element={<Message />} />
        <Route path="logout" element={<Logout />} />
        <Route path="/category" element={<CategoryPagesMain />} />
        <Route path="/question" element={<QuestionViewXyzOrg />} />
        <Route path="/resultsummary" element={<ResultSummaryOrg />} />
        <Route path="/resultinfo" element={<ResultInformation />} />
        <Route path="/provpassinfo" element={<ProvPassInformation />} />
        <Route path="/standardviewxyz" element={<StandardViewXyz />} />
        <Route path="/provpassnog" element={<ProvPassNog />} />
        <Route path="/provpassdtk" element={<ProvPassDtk />} />
        <Route path="/overblick" element={<OverBlick />} />
        <Route path="/provpasscorrectans" element={<ProvPassCorrectAns />} />
      </Routes>
    </div>
  );
}

export default App;
