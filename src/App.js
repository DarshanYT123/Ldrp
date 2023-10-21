import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Basicinfo from "./Components/Basicinfo/Basicinfo";
import StudentHistory from "./Components/StudentHistory/StudentHistory";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
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


  return (
    <div className="App bg-[#F6F3F3] ">
      <div>
      <div className="">
      <Navbar />
      </div>
      {/* <div className="py-3 flex justify-end ">
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.28px] capitalize">Last Login</h2>
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px] capitalize px-3">2 :00 pM , Sunday 15 Oct 2023</h2>
      </div> */}
      {/* <Progressbar/> */}
      <div className=" ">
        <Router>
      <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="/form" element={<MentoringForm />} /> */}

      {/* <Route path="/results" element={<Results />} /> */}
      <Route path="/secondresults" element={<SecondResults />} />
      {/* <Page /> */}
      </Routes>
      </Router>
      </div>
      </div>
      
    </div>
  );
}

export default App;
