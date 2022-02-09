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
import Quan_Comp_K from './pages/category/quan-comp-k/Quan_Comp_K';
import Quan_Comp_N from './pages/category/quan-comp-n/Quan_Comp_N';
import Quan_Comp_D from './pages/category/quan-comp-d/Quan_Comp_D';
import Quan_Comp_E from './pages/category/quan-comp-e/Quan_Comp_E';
import Quan_Comp_L from './pages/category/quan-comp-l/Quan_Comp_L';
import Quan_Comp_M from './pages/category/quan-comp-m/Quan_Comp_M';
import Quan_Comp_O from './pages/category/quan-comp-o/Quan_Comp_O';
import Question_View_XYZ from './components/organism/Question-View-Xyz/Question_View_XYZ';
import Question_View_NOG from './components/organism/Question-View-Nog/Question_View_NOG';
import Question_View_MEK from './components/organism/Question-View-Mek/Question_View_MEK';
import Question_View_ELF from './components/organism/Question-View-Elf/Question_View_ELF';
import Question_View_DTK from './components/organism/Question-View-Dtk/Question_View_DTK';
import Result_Question_View_DTK from './components/organism/Question-View-Dtk/Result_Question_View_DTK';
import Question_View_LAS from './components/organism/Question-View-Las/Question_View_LAS';
import Result_Question_View_LAS from './components/organism/Question-View-Las/Result_Question_View_LAS';
import Result_Summary_Org from './components/organism/Result-Summary-Org/Result_Summary_Org';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/second-popup" element={<Second_Popup />} />
        <Route path="/first-popup" element={<First_Popup />} />
        <Route path="/quan-comp-e" element={<Quan_Comp_E />} />
        <Route path="/quan-comp-n" element={<Quan_Comp_N />} />
        <Route path="/quan-comp-d" element={<Quan_Comp_D />} />
        <Route path="/quan-comp-k" element={<Quan_Comp_K />} />
        <Route path="/quan-comp-x" element={<Quan_Comp_X />} />
        <Route path="/quan-comp-l" element={<Quan_Comp_L />} />
        <Route path="/quan-comp-m" element={<Quan_Comp_M />} />
        <Route path="/quan-comp-o" element={<Quan_Comp_O />} />
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
        <Route path="/result-summary-org" element={<Result_Summary_Org/>} />
        
      </Routes>
    </div>
  );
}

export default App;