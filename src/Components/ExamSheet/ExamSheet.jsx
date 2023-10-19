import React from "react";
const ExamSheet = ({handlePrevStep,handleNextStep}) => {


  const [values, setValues] = React.useState({

    semester:"",       
    subjectcode1:"",subjectcode2:"",subjectcode3:"",subjectcode4:"",subjectcode5:"",
    subjectcode6:"",subjectcode7:"",
    grade1:"",grade2:"",  grade3:"",grade4:"",grade5:"",grade6:"",grade7:"", grade8:"",
    grade9:"",grade10:"", grade11:"",grade12:"",grade13:"",grade14:"",grade15:"",
    grade16:"", grade17:"", grade18:"",grade19:"",grade20:"",grade21:"",grade22:"",
    grade23:"",grade24:"",grade25:"", grade26:"", grade27:"",grade28:"",
    years1:"",  years2:"", years3:"",years4:"",  years5:"", years6:"",years7:"", years8:"",
    years9:"", years10:"",years11:"",years12:"",years13:"",years14:"",years15:"",
    years16:"",years17:"",years18:"",years19:"",years20:"",years21:"",
    reamark1:"", reamark2:"", reamark3:"", reamark4:"", reamark5:"", reamark6:"", reamark7:"",

  })

  const {
    semester,       
    subjectcode1,subjectcode2,subjectcode3,subjectcode4,subjectcode5,
    subjectcode6,subjectcode7,
    grade1,grade2,  grade3,grade4,grade5,grade6,grade7, grade8,
    grade9,grade10, grade11,grade12,grade13,grade14,grade15,
    grade16, grade17, grade18,grade19,grade20,grade21,grade22,
    grade23,grade24,grade25, grade26, grade27,grade28,
    years1,  years2, years3,years4,  years5, years6,years7, years8,
    years9, years10,years11,years12,years13,years14,years15,
    years16,years17,years18,years19,years20,years21,
    reamark1, reamark2, reamark3, reamark4, reamark5, reamark6, reamark7,
  } =values
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    //setState({...state,[name]:value});
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const isValid = validateAll();

    // if (!isValid) {
    //   return false;
    // }

    alert(JSON.stringify(values));
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className="absolute top-32 right-0 pr-10  py-5 max-h-[700px]  overflow-y-auto   ">
    <div className="flex justify-center  items-center" >
        <h2 className="text-[color:var(--02,#47A5E4)] text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">External Exam Sheet</h2>
    </div>
    <div className=" pt-7 flex flex-row justify-between items-center">
        <div className="flex flex-row px-1 items-center">
    <div className="flex px-1" >
        <h2 className="    text-[color:var(--01,#159BD6)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize
"> Note:
</h2>
    </div>
    <div className="flex " >
        <h2 className="text-[color:var(--01,#159BD6)] text-[14px] font-inter not-italic font-normal leading-[normal] tracking-[0.28px] capitalize">Please Fill all the details in <span className="text-[color:var(--01,#159BD6)] text-[14px] font-inter not-italic font-semibold leading-[normal] tracking-[0.28px] capitalize">CAPITAL</span> Letters only
</h2>
    </div>
    </div>
    <div>

    
      

    <div className="flex flex-row">
              <label
                for="hobbies"
                className=" px-1  py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Semester {" "}
              </label>

              <select
                id="Semester"
                name="semester"
                value={semester}
                onChange={handleInputChange}
                //onBlur={validateOne}

                className="w-[158px] h-[40px]  bg-[#E6E6E6]   text-center  rounded-[5px] focus:outline-none text-[color:var(--02,#363636)] text-[18px] font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize"
              >
                <option value="sem1" >Sem 1</option>
                <option value="sem2">Sem 2</option>
                <option value="sem3">Sem 3</option>
                <option value="sem4">Sem 4</option>
                <option value="sem5">Sem 5</option>
                <option value="sem6">Sem 6</option>
                <option value="sem7">Sem 7</option>
              </select>

              
            </div>



            </div>
          </div>





 {/* TABLE */}
 
 <div className=" py-4 ">
<div className="">
      <table className=" " >
        <tr className="text-center ">
          <th className="border-r-[1px]  w-[189px] h-[45px] bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">Subject Code</th>
          <th className="border-r-[1px] w-[96px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">Grade</th>
          <th className="border-r-[1px] w-[96px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">Exam Yr</th>
          <th className="border-r-[1px] w-[96px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">Grade</th>
          <th className="border-r-[1px] w-[96px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">Exam Yr</th>
          <th className="border-r-[1px] w-[96px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">Grade</th>
          <th className="border-r-[1px] w-[96px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">Exam Yr</th>
          <th className="border-r-[1px] w-[96px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#90d0fa]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">Grade</th>
          <th className="border-l-[1px] w-[96px] h-[45px] bg-[#159BD6] rounded-[0px_4px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">Remark</th>
        </tr>
        <tr className="">
<th>
          <input
                    type="text"
                    name="subjectcode1"
                    value={subjectcode1}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="subjectcode1"
                    className="p-3 table-auto1 w-[189px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
    <th>
          <input
                    type="text"
                    name="grade1"
                    value={grade1}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="A+"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
    <th>
          <input
                    type="text"
                    name="years1"
                    value={years1}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="2013"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="grade2"
                    value={grade2}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="B+"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="years2"
                    value={years2}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="2013"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
    <th>
          <input
                    type="text"
                    name="grade3"
                    value={grade3}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="C+"
                    className=" p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="years3"
                    value={years3}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="2014"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="grade4"
                    value={grade4}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="D+"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="reamark1"
                    value={reamark1}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="R1"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
      </tr>
      <tr className="">
<th>
          <input
                    type="text"
                    name="subjectcode2"
                    value={subjectcode2}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="subjectcode2"
                    className="p-3 w-[189px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
    <th>
          <input
                    type="text"
                    name="grade5"
                    value={grade5}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="A+"
                    className="p-3 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
    <th>
          <input
                    type="text"
                    name="years4"
                    value={years4}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="2015"
                    className="p-3 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="grade6"
                    value={grade6}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="B+"
                    className="p-3 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="years5"
                    value={years5}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="2016"
                    className="p-3 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
    <th>
          <input
                    type="text"
                    name="grade7"
                    value={grade7}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="C+"
                    className="p-3 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="years6"
                    value={years6}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="2017"
                    className="p-3 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="grade8"
                    value={grade8}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="B+"
                    className="p-3 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="reamark2"
                    value={reamark2}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="R2"
                    className="p-3 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
      </tr>
      <tr className="">
<th>
          <input
                    type="text"
                    name="subjectcode3"
                    value={subjectcode3}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="subjectcode3"
                    className="p-3 table-auto1 w-[189px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
    <th>
          <input
                    type="text"
                    name="grade9"
                    value={grade9}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="B+"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
    <th>
          <input
                    type="text"
                    name="years7"
                    value={years7}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="2014"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="grade10"
                    value={grade10}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="C+"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="years8"
                    value={years8}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="2015"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
    <th>
          <input
                    type="text"
                    name="grade11"
                    value={grade11}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="E+"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="years9"
                    value={years9}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="2014"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="grade12"
                    value={grade12}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="C+"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="reamark3"
                    value={reamark3}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="R3"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
      </tr>
      <tr className="">
<th>
          <input
                    type="text"
                    name="subjectcode4"
                    value={subjectcode4}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="subjectcode4"
                    className="p-3 w-[189px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
    <th>
          <input
                    type="text"
                    name="grade13"
                    value={grade13}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="C+"
                    className="p-3 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
    <th>
          <input
                    type="text"
                    name="years10"
                    value={years10}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="2015"
                    className="p-3 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="grade14"
                    value={grade14}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="A+"
                    className="p-3 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="years11"
                    value={years11}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="2016"
                    className="p-3 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
    <th>
          <input
                    type="text"
                    name="grade15"
                    value={grade15}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="E+"
                    className="p-3 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="years12"
                    value={years12}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="2018"
                    className="p-3 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="grade16"
                    value={grade16}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="B+"
                    className="p-3 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="reamark4"
                    value={reamark4}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="R4"
                    className="p-3 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
      </tr>
      <tr className="">
<th>
          <input
                    type="text"
                    name="subjectcode5"
                    value={subjectcode5}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="subjectcode5"
                    className="p-3 table-auto1 w-[189px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
    <th>
          <input
                    type="text"
                    name="grade17"
                    value={grade17}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="A+"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
    <th>
          <input
                    type="text"
                    name="years13"
                    value={years13}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="2015"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="grade18"
                    value={grade18}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="D+"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="years14"
                    value={years14}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="2014"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
    <th>
          <input
                    type="text"
                    name="grade19"
                    value={grade19}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="E+"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="years15"
                    value={years15}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="2011"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="grade20"
                    value={grade20}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="A+"
                    className= "p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="reamark5"
                    value={reamark5}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="R5"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
      </tr>
      <tr className="">
<th>
          <input
                    type="text"
                    name="subjectcode6"
                    value={subjectcode6}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="subjectcode6"
                    className="p-3 w-[189px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
    <th>
          <input
                    type="text"
                    name="grade21"
                    value={grade21}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="C+"
                    className="p-3 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
    <th>
          <input
                    type="text"
                    name="years16"
                    value={years16}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="2016"
                    className="p-3 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="grade22"
                    value={grade22}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="A+"
                    className="p-3 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="years17"
                    value={years17}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="2014"
                    className="p-3 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
    <th>
          <input
                    type="text"
                    name="grade23"
                    value={grade23}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="E+"
                    className="p-3 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="years18"
                    value={years18}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="2018"
                    className="p-3 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="grade24"
                    value={grade24}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="D+"
                    className="p-3 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="reamark6"
                    placeholder="R6"
                    value={reamark6}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    className="p-3 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
      </tr>
      <tr className="">
<th>
          <input
                    type="text"
                    name="subjectcode7"
                    value={subjectcode7}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="subjectcode7"
                    className="p-3 table-auto1 w-[189px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
    <th>
          <input
                    type="text"
                    name="grade25"
                    value={grade25}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="A+"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
    <th>
          <input
                    type="text"
                    name="years19"
                    value={years19}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="2019"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="grade26"
                    value={grade26}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="B+"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="years20"
                    value={years20}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="2015"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
    <th>
          <input
                    type="text"
                    name="grade27"
                    value={grade27}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="C+"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="years21"
                    value={years21}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="2021"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="grade28"
                    value={grade28}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="C+"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  

    <th>
          <input
                    type="text"
                    name="reamark7"
                    value={reamark7}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="R7"
                    className="p-3 table-auto1 w-[96px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                  />
    </th>  
      </tr>
      </table>
      
      </div>
      

      </div>
    {/* BUTTONS */}

    <div className="flex flex-row justify-center items-center gap-x-7 py-4">
    <button              onClick={handleNextStep}
 className="px-10 py-2 shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] bg-[#159BD6] text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Save & Next</button>
    <button             onClick={handlePrevStep}
 className="border-[#159BD6] px-10 py-2 border-[1px] rounded-[5px] text-[color:var(--01,#159BD6)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Cancel</button>
</div>

    </div>
    </form>
    </>
  );
};

export default ExamSheet;
