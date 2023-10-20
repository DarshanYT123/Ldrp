'use client';
import React, { useEffect, useState } from 'react';
import StepFinal from './StepFinal';
import Basicinfo from '../Basicinfo/Basicinfo';
import StudentHistory from '../StudentHistory/StudentHistory';
import ExamSheet from '../ExamSheet/ExamSheet';
import MidSemester from '../MidSemester/MidSemester';
import Activities from '../Activities/Activities';
import Seminar from '../Seminar/Seminar';
import Membership from '../Membership/Membership';

// This is the parent component.
// This component will control and manage steps and data

// Step A: Customer Identity Info
// Step B: Customer Business Info
// Step C: Customer Financial Info
// Step D: Confirm Form  Data

// Step Final: Succes Result

const initialFormData = {
  firstName: '',
  lastName: '',
  businessName: '',
  businessCity: '',
  businessWebsite: '',
  businessEmail: '',
  incomePerMonth: 0,
  taxPercantage: 0,
  agreeToTerms: false,
};

// const stepsArray = ['A', 'B', 'C', 'D','E','F','G'];
  const stepsArray = [
    {
      no: "A",
      title: "Basic Information",
  },
  {
    no: "B",
    title: "Student History And Information",
},
  {
    no: "C",
    title: "External Exam Sheet",
},
{
  no: "D",
  title: "Mid Semester Details",
},
{
  no: "E",
  title: "Participated  Co-Curricular Activities",
},
{
  no: "F",
  title: "Participated Seminar or Project",
},
{
  no: "G",
  title: "Membership Organization",
},

];
const SimpleMultiStepForm = ({ showStepNumber }) => {
  
    const [step, setStep] = useState('A');
  const [formData, setFormData] = useState(initialFormData);

  // We need a method to go to next step
  const handleNextStep = () => {
    if (step === 'A') setStep('B');
    else if (step === 'B') setStep('C');
    else if (step === 'C') setStep('D');
    else if (step === 'D') setStep('E');
    else if (step === 'E') setStep('F');
    else if (step === 'F') setStep('G');
  };

  // We need a method to go to prev step
  const handlePrevStep = () => {
    if (step === 'D') setStep('C');
    else if (step === 'C') setStep('B');
    else if (step === 'B') setStep('A');
  };

  // We need a method to update our formData
  const handleChangeInput = (event) => {
    const fieldName = event.target.name;
    let fieldValue;
    if (fieldName === 'agreeToTerms') {
      fieldValue = event.target.checked;
    } else {
      fieldValue = event.target.value;
    }
    setFormData({
      ...formData,
      [fieldName]: fieldValue,
    });
  };

  // We need a method to do final operation
  const handleSubmitFormData = () => {
    // Here You can do final Validation and then Submit Your form
    if (!formData.agreeToTerms) {
      alert('Error!!!!!!   You must agree to Terms of Services!!!!');
    } else {
      setStep('Final');
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  // Section for render StepNumbers
  const renderTopStepNumbers = () => {
    if (!showStepNumber || step === 'Final') {
      return null;
    }
    // return (
    //   <section className='mt-2 mb-4 flex flex-col '>
    //     {/* {stepsArray.map((item) => (
    //       <div
    //         key={item}
    //         className={`w-8 h-8 flex justify-center items-center border-2 border-gray-600 rounded-full cursor-pointer ${
    //           item === step ? 'bg-blue-500' : ''
    //         }`}
    //         onClick={() => setStep(item)}
    //       >
    //         {item}
    //       </div>
    //     ))} */}
    //   </section>
      
    // );
  };

  return (
    <>
    <div className='flex flex-row justify-center items-center bg-white   '>
    <section className='mt-2  flex flex-col gap-y-16 px-6 '>
    {stepsArray.map((item,index) => (
            <div
            key={index}
            onClick={() => setStep(item.no)}
            className={
              item.length - 1
                ? "w-full  flex flex-col justify-start  gap-y-16"
                : " w-full flex justify-start  items-start   "
            }
          >
    
      <div  className="relative flex flex-row  gap-x-6 items-center "      
        >
      <div
        className={`rounded-full flex-row cursor-pointer transition duration-500 ease-in-out  h-6 w-6 flex items-center justify-center py-3 ${
          item === step.selected ? "bg-[#47A5E4] text-[#47A5E4] font-bold  "
          : "bg-[#D9D9D9]"
        }`}
      >
      </div>
      <div
            className={`absolute top-0 flex justify-center cursor-pointer items-center text-center  pl-12 flex-row w-60 text-[16px] font-Poppins font-semibold uppercase text-[color:var(--02,#47A5E4)] text-xs not-italic  leading-[normal] ${
              step.highlighted ? "text-[#47A5E4]" : "text-[#BDBDBD]"
            }`}
            onClick={() => setStep(item.title)}
            >
            {item.title}
          </div>
      </div>
      {
                index !== stepsArray.length - 1 &&  <div
          className={`relative top-14 -left-[2.9rem]   rotate-90  z-1 w-[4.4rem] border-t-2 transition duration-1000 ease-in-out  ${
            step.completed ? "border-[#47A5E4]" : " "
          }  `}
        ></div>}
      </div>
      
    ))}
  </section>
  <div className="circleWrapper">

    </div>
<div className='w-[1000px] h-screen max-w-full px-6 py-3 mx-auto rounded-lg '>
      {renderTopStepNumbers()}

      {/* // Render Steps */}
      {step === 'A' ? (
        <Basicinfo
          formData={formData}
          handleChangeInput={handleChangeInput}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === 'B' ? (
        <StudentHistory
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === 'C' ? (
        <ExamSheet
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === 'D' ? (
        <MidSemester
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === 'E' ? (
        <Activities
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === 'F' ? (
        <Seminar
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === 'G' ? (
        <Membership
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleSubmitFormData={handleSubmitFormData}
        />
      ) : null}
      {step === 'Final' ? <StepFinal /> : null}
    </div>
    </div>
    </>
  );
};

export default SimpleMultiStepForm;