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
import Courses_Main from './components/organism/courses-org/courses-main/Courses_Main';


function App() {
  return (
    <div className="App">
      <Routes>   
        <Route path="/second-popup" element={<Second_Popup/>} />
        <Route path="/first-popup" element={<First_Popup/>} />
        <Route path="/quan-comp-e" element={<Quan_Comp_E/>} />
        <Route path="/quan-comp-n" element={<Quan_Comp_N/>} />
        <Route path="/quan-comp-d" element={<Quan_Comp_D/>} />
        <Route path="/quan-comp-k" element={<Quan_Comp_K/>} />
        <Route path="/quan-comp-x" element={<Quan_Comp_X/>} />
        <Route path="/quan-comp-l" element={<Quan_Comp_L/>} />
        <Route path="/quan-comp-m" element={<Quan_Comp_M/>} />
        <Route path="/quan-comp-o" element={<Quan_Comp_O/>} />
        <Route path="/courses-main" element={<Courses_Main/>} />
        <Route path="/" element={<Signup/>} />
        <Route path="login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="courses" element={<Courses />} />
        <Route path="profile" element={<Profile />} />
        <Route path="msg" element={<Message />} />
        <Route path="setting" element={<Setting />} />
        <Route path="logout" element={<Logout />} />
        <Route path="courses-main" element={<Courses_Main/>} />
      </Routes>

    </div>
  );
}

export default App;