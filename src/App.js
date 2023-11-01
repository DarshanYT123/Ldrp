import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Basicinfo from "./Components/Basicinfo/Basicinfo";
import StudentHistory from "./Components/StudentHistory/StudentHistory";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState,useEffect } from "react";
import Stepper from "./Components/Stepper/Stepper";
import StepperControl from "./Components/Stepper/StepperControl";
import { UseContextProvider } from "./Components/Stepper/StepperContext";

import ExamSheet from "./Components/ExamSheet/ExamSheet";
import MidSemester from "./Components/MidSemester/MidSemester";
import Activities from "./Components/Activities/Activities";
import Seminar from "./Components/Seminar/Seminar";
import Membership from "./Components/Membership/Membership";
import Progressbar from "./Components/Progressbar/Progressbar";
import Page from "./Components/Multistep/Page";
import Dashboard from "./Dashboard/Dashboard/Dashboard";
import Results from "./Dashboard/Results/Results";
import SecondResults from "./Dashboard/Results/SecondResults";
import MentoringForm from "./Dashboard/MentoringForm/MentoringForm";
// import Mentorship from "./Mentorship/MentorshipForm/MentorshipForm";
// import MentorshipForm from "./Mentorship/MentorshipForm/MentorshipForm";
import Sidebar from "./Dashboard/Dashboard/Sidebar";
import BasicInfoDashboard from "./Dashboard/BasicInfoDashboard/BasicInfoDashboard";
import Attendance from "./Dashboard/Attendance/Attendance";
import ResultSection from "./Dashboard/Results/ResultSection";
import FeesDetails from "./Dashboard/FeesDetails/FeesDetails";
import University from "./Dashboard/University/University";
import Notification from "./Dashboard/Notification/Notification";

function App() {
  // for aos
  // AOS.init();
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Basic Information", "Student History And Information", "External Exam Sheet","Mid Semester Details","Participated  Co-Curricular Activities","Participated Seminar or Project","Membership Organization"  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        // return <Basicinfo  />;
      case 2:
        // return <StudentHistory />;
      case 3:
        // return <ExamSheet />;
      case 4:
        // return <MidSemester />;
        case 5:
          // return <Activities />;
          case 6:
            // return <Seminar />;
            case 7:
              // return <Membership />;
            default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const [isDashboard, setIsDashboard] = useState(false);

  useEffect(() => {
    if (window.location.pathname.toString().includes("dashboard")) {
      setIsDashboard(true);
    } else {
      setIsDashboard(false);
    }
  });

  return (
    <div className="App bg-[#F6F3F3] ">
      <div>
      <div className="">
      <Navbar />
  
      </div>
      <div className="relative top-4 flex justify-end ">
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.28px] capitalize">Last Login</h2>
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px] capitalize px-3">2 :00 pM , Sunday 15 Oct 2023</h2>
      </div>
      <Router>
       {isDashboard ? (
            <>
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
              <Routes>
              <Route path="/dashboard" element={<BasicInfoDashboard />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/results" element={<ResultSection />} />
              <Route path="/fees" element={<FeesDetails />} />
              <Route path="/university" element={<University />} />
              <Route path="/notification" element={<Notification />} />

              </Routes>
              </>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Page />} />
            </Routes>
          </>
        )}
        </Router>
      </div>
      
    </div>
  );
}

export default App;
