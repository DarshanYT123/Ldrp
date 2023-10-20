import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SimpleMultiStepForm from './SimpleMultiStepForm';
import Dashboardsteps from './Dashboardsteps';
import MentoringForm from '../MentoringForm/MentoringForm';
import Sidebar from "./Sidebar";
import Header from "../Header/Header";

const Dashboard = () => {
    return (
    <div className='relative -top-8   bg-[#F6F3F3] rounded-lg  '>
    <Sidebar/>
         </div>
  );
};

export default Dashboard;