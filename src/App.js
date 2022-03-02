import React from "react";
import { Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses/Courses";
import Profile from "./pages/Profile/Profile";
import Message from "./pages/Message/Message";
import Setting from "./pages/Setting/Setting";
import Logout from "./pages/logout/Logout";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import QuanCompXyz from "./pages/category/QuanCompXyz/QuanCompXyz";
import QuanCompMek from "./pages/category/QuanCompMek/QuanCompMek";
import QuestionViewXyzOrg from "./components/organism/QuestionViewXyzOrg/QuestionViewXyzOrg";
import QuestionViewNogOrg from "./components/organism/QuestionViewNogOrg/QuestionViewNogOrg";
import QuestionViewMekOrg from "./components/organism/QuestionViewMekOrg/QuestionViewMekOrg";
import QuestionViewDtkOrg from "./components/organism/QuestionViewDtkOrg/QuestionViewDtkOrg";
import QuestionViewLasOrg from "./components/organism/QuestionViewLasOrg/QuestionViewLasOrg";
import QuestionViewElfOrg from "./components/organism/QuestionViewElfOrg/QuestionViewElfOrg";
import ResultSummaryOrg from "./components/organism/ResultSummaryOrg/ResultSummaryOrg";
import QuestionViewSamDtkOrg from "./components/organism/QuestionViewSamXyzOrg/QuestionViewSamDtkOrg";
import QuestionViewSamXyzOrg from "./components/organism/QuestionViewSamXyzOrg/QuestionViewSamXyzOrg";
import CoursesCard from "./components/molecule/CoursesCard/CoursesCard";
import ResultInformation from "./components/organism/CoursesOrg/CoursePages/ResultInformation/ResultInformation";
import ProvPassInformation from "./components/organism/CoursesOrg/CoursePages/ProvPassInformation/ProvPassInformation";
import StandardViewXyz from "./components/organism/CoursesOrg/CoursePages/StandardViewXyz/StandardViewXyz";
import ProvPassNog from "./components/organism/CoursesOrg/CoursePages/ProvPassNog/ProvPassNog";
import ProvPassDtk from "./components/organism/CoursesOrg/CoursePages/ProvPassDtk/ProvPassDtk";
import OverBlick from "./components/organism/CoursesOrg/CoursePages/OverBlick/OverBlick";
import ProvPassCorrectAns from "./components/organism/CoursesOrg/CoursePages/ProvPassCorrectAns/ProvPassCorrectAns";
import Home from "./pages/Home/Home";
import LearnMoreCard from "./components/molecule/LearnMoreCard/LearnMoreCard";

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/learnmorecard" element={<LearnMoreCard/>} />
        <Route path="/category" element={<QuanCompXyz />} />
        <Route path="/category" element={<QuanCompXyz />} />
        <Route path="/category" element={<QuanCompXyz />} />
        <Route path="/category" element={<QuanCompXyz />} />
        <Route path="/category" element={<QuanCompXyz />} />
        <Route path="/category" element={<QuanCompXyz />} />
        <Route path="/category" element={<QuanCompXyz />} />
        <Route path="/premium" element={<QuanCompMek />} />
        <Route path="/" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="profile" element={<Profile />} />
        <Route path="message" element={<Message />} />
        <Route path="setting" element={<Setting />} />
        <Route path="logout" element={<Logout />} />
        <Route path="/question-view-xyz" element={<QuestionViewXyzOrg />} />
        <Route path="/question-view-nog" element={<QuestionViewNogOrg />} />
        <Route path="/question-view-mek" element={<QuestionViewMekOrg />} />
        <Route path="/question-view-elf" element={<QuestionViewElfOrg />} />
        <Route path="/question-view-dtk" element={<QuestionViewDtkOrg />} />
        <Route path="/question-view-las" element={<QuestionViewLasOrg />} />
        <Route path="/result-summary-org" element={<ResultSummaryOrg />} />
        <Route
          path="/question-view-sam-dtk-org"
          element={<QuestionViewSamDtkOrg />}
        />
        <Route
          path="/question-view-sam-xyz-org"
          element={<QuestionViewSamXyzOrg />}
        />
        <Route path="/coursescard" element={<CoursesCard />} />
        <Route path="/resultinfo" element={<ResultInformation />} />
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
