import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import Courses from './pages/courses/Courses';
import Profile from './pages/profile/Profile';
import Message from './pages/message/Message';
import Setting from './pages/setting/Setting';
import Logout from './pages/logout/Logout';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Quan_Comp_X from "./pages/category/quan-comp-x/Quan_Comp_X";
import First_Popup from "./components/organism/first-popup/First_Popup";
import Second_Popup from "./components/organism/second-popup/Second_Popup";
import Quan_Comp_M from './pages/category/quan-comp-m/Quan_Comp_M';
import Question_View_XYZ from './components/organism/Question-View-Xyz/Question_View_XYZ';
import Question_View_NOG from './components/organism/Question-View-Nog/Question_View_NOG';
import Question_View_MEK from './components/organism/Question-View-Mek/Question_View_MEK';
import Question_View_ELF from './components/organism/Question-View-Elf/Question_View_ELF';
import Question_View_DTK from './components/organism/Question-View-Dtk/Question_View_DTK';
import Result_Question_View_DTK from './components/organism/Question-View-Dtk/Result_Question_View_DTK';
import Question_View_LAS from './components/organism/Question-View-Las/Question_View_LAS';
import Result_Question_View_LAS from './components/organism/Question-View-Las/Result_Question_View_LAS';
import Result_Summary_Org from './components/organism/Result-Summary-Org/Result_Summary_Org';
import Question_View_Sam_Dtk_Org from './components/organism/Question-View-Sam-Dtk-Org/Question_View_Sam_Dtk_Org';
import Question_View_Sam_Xyz_Org from './components/organism/Question-View-Sam-Dtk-Org/Question_View_Sam_Xyz_Org';
import Finish_Popup_XYZ from './components/molecule/finish-popup-xyz/Finish_Popup_XYZ';
import Question_Save_Popup from './components/molecule/question-save-popup/Question_Save_Popup';
import CoursesCard from './components/molecule/CoursesCard/CoursesCard';
import ResultInformation from './components/organism/courses-org/CoursePages/ResultInformation/ResultInformation';
import ProvPassInformation from './components/organism/courses-org/CoursePages/ProvPassInformation/ProvPassInformation';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/second-popup" element={<Second_Popup />} />
        <Route path="/first-popup" element={<First_Popup />} />
        <Route path="/category" element={<Quan_Comp_X />} />
        <Route path="/category" element={<Quan_Comp_X />} />
        <Route path="/category" element={<Quan_Comp_X />} />
        <Route path="/category" element={<Quan_Comp_X />} />
        <Route path="/category" element={<Quan_Comp_X />} />
        <Route path="/category" element={<Quan_Comp_X />} />
        <Route path="/category" element={<Quan_Comp_X />} />
        <Route path="/premium" element={<Quan_Comp_M />} />
        <Route path="/" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="courses" element={<Courses />} />
        <Route path="profile" element={<Profile />} />
        <Route path="msg" element={<Message />} />
        <Route path="setting" element={<Setting />} />
        <Route path="logout" element={<Logout />} />
        <Route path="/question-view-xyz" element={<Question_View_XYZ />} />
        <Route path="/question-view-nog" element={<Question_View_NOG />} />
        <Route path="/question-view-mek" element={<Question_View_MEK />} />
        <Route path="/question-view-elf" element={<Question_View_ELF />} />
        <Route path="/question-view-dtk" element={<Question_View_DTK />} />
        <Route path="/result-question-view-dtk" element={<Result_Question_View_DTK />} />
        <Route path="/question-view-las" element={<Question_View_LAS />} />
        <Route path="/result-question-view-las" element={<Result_Question_View_LAS />} />
        <Route path="/result-summary-org" element={<Result_Summary_Org />} />
        <Route path="/question-view-sam-dtk-org" element={<Question_View_Sam_Dtk_Org />} />
        <Route path="/question-view-sam-xyz-org" element={<Question_View_Sam_Xyz_Org />} />
        <Route path="/finish-popup-xyz" element={<Finish_Popup_XYZ />} />
        <Route path="/question-save-popup" element={<Question_Save_Popup />} />
        <Route path="/coursescard" element={<CoursesCard />} />
        <Route path="/resultinfo" element={<ResultInformation />} />
        <Route path="/resultinfo" element={<ResultInformation />} />
        <Route path="/provpassinfo" element={<ProvPassInformation />} />
      </Routes>
    </div>
  );
}

export default App;