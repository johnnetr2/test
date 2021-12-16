// import Dashboard from './components/Dashboard';
// import './assets/css/Dashboard.css'
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import Courses from './pages/courses/Courses';
import Profile from './pages/profile/Profile';
import Message from './pages/message/Message';
import Setting from './pages/setting/Setting';
import Logout from './pages/logout/Logout';

import Outline_btn from './components/atom/outline-btn/Outline_btn';
import './components/atom/outline-btn/Outline_btn.css';

import Filled_btn from './components/atom/filled-btn/Filled_btn';
import './components/atom/filled-btn/Filled_btn.css';

import Continue_btn from './components/atom/continue-btn/Continue_btn';
import './components/atom/continue-btn/Continue_btn.css';

import Input_field from './components/atom/input-field/Input_field';
import './components/atom/input-field/Input_field.css';

import Label from './components/atom/label/Label';
import './components/atom/label/Label.css';

import Progress_Bar from './components/atom/progress-bar/Progress_Bar';
import './components/atom/progress-bar/Progress_Bar.css';

import Label_field from './components/molecule/label-field/Label_field';
import './components/molecule/label-field/Label_field.css';

import Card from './components/molecule/card/Card';
import './components/molecule/card/Card.css';

import Login_org from './components/organism/login-org/Login_org';
import './components/organism/login-org/Login_org.css';

import Signup_org from './components/organism/signup-org/Signup_org';
import './components/organism/signup-org/Signup_org.css';



import './pages/login/Login.css';
import './pages/signup/Signup.css';

import Sidebar_Org from './components/organism/sidebar-org/Sidebar_Org';
import './components/organism/sidebar-org/Sidebar_Org.css';

import Main_Org from './components/organism/main-org/Main_Org';
import './components/organism/main-org/Main_Org.css';


import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Quan_Comparison from "./components/organism/Quan_Comparison_Org/Quan_Comparison_Org";
import Outline_Box from "./components/atom/outline-box/Outline_Box";
import Outline_Field from "./components/atom/outline-field/Outline_Field";
import Check_Field from "./components/molecule/check-field/Check_Field";
import Exercise_Btn from "./components/atom/exercise-btn/Exercise_Btn";
import Quan_Comp_M_Org from "./components/organism/Quan-Comp-M-Org/Quan_Comp_M_Org";


function App() {
  return (
    <div className="App">
      <Routes>

        {/* <Dashboard/> */}
        {/* -------------------Components */}
        {/* <Route path="/" element={<Sidebar_Org/>} /> */}
        {/* -------------------Pages */}
        {/* <Route path="/" element={<Outline_btn/>} /> */}
        {/* <Route path="/" element={<Filled_btn/>} /> */}
        {/* <Route path="/" element={<Continue_btn/>} /> */}
        {/* <Route path="/" element={<Input_field/>} /> */}
        {/* <Route path="/" element={<Label/>} /> */}
        {/* <Route path="/" element={<Progress_Bar/>} /> */}
        {/* <Route path="/" element={<Label_field/>} /> */}
        {/* <Route path="/" element={<Card/>} /> */}
        {/* <Route path="/" element={<Login_org />} /> */}
        {/* <Route path="/" element={<Signup_org />} /> */}
        {/* <Route path="/" element={<Main_Org />} /> */}
        {/* <Route path="/" element={<Outline_Field/>} /> */}
        {/* <Route path="/" element={<Check_Field/>} /> */}
        {/* <Route path="/" element={<Exercise_Btn/>} /> */}
        <Route path="/" element={<Quan_Comp_M_Org/>} />
        {/* <Route path="/" element={<Quan_Comparison/>} /> */}
        {/* <Route path="/" element={<Outline_Box/>} /> */}
        {/* <Route path="/" element={<Signup/>} />
        <Route path="login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="courses" element={<Courses />} />
        <Route path="profile" element={<Profile />} />
        <Route path="msg" element={<Message />} />
        <Route path="setting" element={<Setting />} />
        <Route path="logout" element={<Logout />} /> */}


      </Routes>

    </div>
  );
}

export default App;