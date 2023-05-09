import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate, useNavigationType, createRoutesFromChildren, matchRoutes } from "react-router-dom";
import Courses from "./pages/Courses/Courses";
import Profile from "./pages/Profile/Profile";
import Message from "./pages/Message/Message";
import Logout from "./pages/Logout/Logout";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Payment from "./pages/Payment/Payment";
import PayConfirm from "./pages/PayConfirmation/PayConfirnmation";
import { instance2, EndPoints } from "./components/service/Route";
import swal from "sweetalert";
import { setInitialUserState } from "./utils/commonService";
import "./App.css";
import ResultInformation from "./components/organism/CoursesOrg/CoursePages/ResultInformation/ResultInformation";
import TestInformation from "./components/organism/CoursesOrg/CoursePages/TestInformation/TestInformation";
import ProvPassInformation from "./components/organism/CoursesOrg/CoursePages/ProvPassInformation/ProvPassInformation";
import ResultSummaryOrg from "./components/organism/HomeOrg/HomePages/QuestionPages/ResultSummaryOrg/ResultSummaryOrg";
import StandardViewXyz from "./components/organism/CoursesOrg/CoursePages/StandardViewXyz/StandardViewXyz";
import ProvPassNog from "./components/organism/CoursesOrg/CoursePages/ProvPassNog/ProvPassNog";
import ProvPassDtk from "./components/organism/CoursesOrg/CoursePages/ProvPassDtk/ProvPassDtk";
import ProvPassCorrectAns from "./components/organism/CoursesOrg/CoursePages/ProvPassCorrectAns/ProvPassCorrectAns";
import CategoryPagesMain from "../src/components/organism/HomeOrg/HomePages/CategoryPages/CategoryPagesMain/CategoryPagesMain";
import Home from "./pages/Home/Home";
import QuestionViewXyzOrg from "./components/organism/HomeOrg/HomePages/QuestionPages/QuestionViewScreen/QuestionViewXyzOrg";
import ResultFooter from "./components/molecule/ResultFooter/ResultFooter";
import QuestionViewDtkOrg from "./components/organism/HomeOrg/HomePages/QuestionPages/QuestionViewDtkOrg/QuestionViewDtkOrg";
import ResultQuestionViewDtkOrg from "./components/organism/HomeOrg/HomePages/QuestionPages/QuestionViewDtkOrg/ResultQuestionViewDTKOrg";
import CategoryPagesRightBar from "./components/organism/HomeOrg/HomePages/CategoryPages/CategoryPagesRightBar/CategoryPagesRightBar";
import Provresultat from "./components/organism/CoursesOrg/CoursePages/Provresultat/Provresultat";
import OverBlick from "./components/organism/CoursesOrg/CoursePages/OverBlick/OverBlick";
import RattadOverblick from "./components/organism/CoursesOrg/CoursePages/RattadOverblick/RattadOverblick";
import HelpPopup from "./components/atom/HelpPopup/HelpPopup";
import EmailVerified from "./components/molecule/EmailVerified/EmailVerified";
import * as Sentry from "@sentry/react";
require("dotenv").config();

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.reactRouterV6Instrumentation(
        React.useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes
      ),
    }),
    new Sentry.Replay()
  ],
  environment: process.env.REACT_APP_SERVER_NAME === "PROD" ? "production" : "DEV",
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,

});

const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);


function App() {
  const [toggleIcon, setToggleIcon] = useState({
    dasboard: true,
    course: false,
    feedback: false,
    profile: false,
  });
  const location = useLocation().pathname;
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log("in the main useEffect", location)
    if (token && (location !== '/login' || location !== '/')) {
      instance2.get(EndPoints.getUser).then(response => {
        console.log("in the if statement", response.data)
        setInitialUserState(response.data)
      }).catch(error => {
        localStorage.removeItem('token')
        localStorage.removeItem('isPremium')
        localStorage.removeItem('email')
        swal({
          title: "Please login to continue",
          icon: "warning",
          dangerMode: true,
        }).then((willDelete) => {
          navigate('/login')
        });
        console.log("error", error)
      })
    }
  }, [location])

  return (
    <div className="App">
      <SentryRoutes>
        <Route
          path="/resultquesviewdtkorg"
          element={<ResultQuestionViewDtkOrg />}
        />
        <Route path="/quesviewdtkorg" element={<QuestionViewDtkOrg />} />
        <Route path="/quesvieworg" element={<QuestionViewXyzOrg />} />
        <Route path="resultfooter" element={<ResultFooter />} />
        <Route path="/categoryrtbar" element={<CategoryPagesRightBar />} />
        <Route path="/emailverified/:id" element={<EmailVerified />} />
        <Route path="/" element={<Signup />} />
        <Route path="/helppopup" element={<HelpPopup />} />
        <Route path="login" element={<Login />} />
        <Route path="/checkout" element={<Payment />} />
        <Route path="/payment-confirmation" element={<PayConfirm />} />
        <Route
          path="home"
          element={
            <Home toggleIcon={toggleIcon} setToggleIcon={setToggleIcon} />
          }
        />
        {/* {process.env.REACT_APP_SERVER_NAME === "DEV" ? (
          
        ) : (
          ""
        )} */}
        <Route
          path="courses"
          toggleIcon={toggleIcon}
          setToggleIcon={setToggleIcon}
          element={<Courses />}
        />
        <Route path="profile" element={<Profile />} />
        <Route path="feedback" element={<Message />} />
        <Route path="logout" element={<Logout />} />
        <Route path="/category" element={<CategoryPagesMain />} />
        <Route path="/question" element={<QuestionViewXyzOrg />} />
        <Route path="/resultsummary" element={<ResultSummaryOrg />} />
        <Route path="/resultinfo" element={<ResultInformation />} />
        <Route path="/provpassinfo" element={<ProvPassInformation />} />
        <Route path="/testInformation" element={<TestInformation />} />
        <Route path="/simuleraprov" element={<StandardViewXyz />} />
        <Route path="/provpassnog" element={<ProvPassNog />} />
        <Route path="/provpassdtk" element={<ProvPassDtk />} />
        <Route path="/provpasscorrectans" element={<ProvPassCorrectAns />} />
        <Route path="/provresultat" element={<Provresultat />} />
        <Route path="/overblick" element={<OverBlick />} />
        <Route path="/rattadoverblick" element={<RattadOverblick />} />
      </SentryRoutes>
    </div>
  );
}

export default App;
