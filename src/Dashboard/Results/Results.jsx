import React from 'react'

function Results() {
  return (
    <>
     <div className=' top-[7rem] right-0  px-10  py-5 max-h-[700px]  overflow-y-auto bg-white'>
    
       
       
       
        <form>
          <div className="flex flex-row gap-x-[25rem] py-5 px-10 items-center justify-center">

            <div className="flex">
            <label
                  for=" Examination"
                  className="ml-[20px] px-1  py-2 text-[16px]  font-Poppins font-semibold text-[#1E1E1E] leading-[24px]"
                >
                  Examination :{" "}
                </label>
            <select
              id="12th"
              name="selectoption"
              // value={selectoption}
              // onChange={handleInputChange}
              //onBlur={validateOne}
              tabIndex={1}
              className="flex flex-row w-[128px] h-[40px]  bg-[#E6E6E6] hover:text-[#47A5E4]  text-center  rounded-[5px] focus:outline-none text-[color:var(--02,#363636)] text-[18px] font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize"
            >
              <option selected>Midsem</option>
              <option value="Externak">External</option>
              <option value="Midsem">Midsem</option>
            
            </select>
            </div>
            <div className="flex">
            <label
                  for="Semester"
                  className="ml-[20px] px-1  py-2 text-[16px]  font-Poppins font-semibold text-[#1E1E1E] leading-[24px]"
                >
                  Semester :{" "}
                </label>
            <select
              id="12th"
              name="selectoption"
              // value={selectoption}
              // onChange={handleInputChange}
              //onBlur={validateOne}
              tabIndex={1}
              className="flex flex-row w-[128px] h-[40px]  bg-[#E6E6E6] hover:text-[#47A5E4]  text-center  rounded-[5px] focus:outline-none text-[color:var(--02,#363636)] text-[18px] font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize"
            >
              <option selected>Semester 1</option>
              <option value="Semester 1">Semester 1</option>
              <option value="Semester 2">Semester 2</option>
              <option value="Semester 3">Semester 3</option>
              <option value="Semester 4">Semester 4</option>
              <option value="Semester 5">Semester 5</option>
              <option value="Semester 6">Semester 6</option>
              <option value="Semester 7">Semester 7</option>
            </select>
            </div>
           
            </div>

            {/* Table  */}

            <div className="py-4 flex items-center justify-center">
            <table className=" ">
              <tr className="text-center ">
                <th className="border-r-[1px]  w-[321px] h-[45px] bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                Subjects
                </th>
                <th className="border-r-[1px] w-[176px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                Marks
                </th>
                
                </tr>


                <tr className="">
                <th>
                  <div className=" p-3 table-auto1 w-[ 379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   computer
                  </div>
                </th>
                <th>
                  <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   100
                  </div>
                </th>
                </tr>
                <tr className="">
                <th>
                  <div className=" p-3  w-[ 379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   computer
                  </div>
                </th>
                <th>
                  <div className="p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   100
                  </div>
                </th>
                </tr>
                <tr className="">
                <th>
                  <div className=" p-3 table-auto1  w-[ 379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   computer
                  </div>
                </th>
                <th>
                  <div className="p-3 table-auto1  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   100
                  </div>
                </th>
                </tr>

                <tr className="">
                <th>
                  <div className=" p-3  w-[ 379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   computer
                  </div>
                </th>
                <th>
                  <div className="p-3   w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   100
                  </div>
                </th>
                </tr>
                <tr className="">
                <th>
                  <div className=" p-3 table-auto1  w-[ 379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   computer
                  </div>
                </th>
                <th>
                  <div className="p-3 table-auto1  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   100
                  </div>
                </th>
                </tr>
                <tr className="">
                <th>
                  <div className=" p-3   w-[ 379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   computer
                  </div>
                </th>
                <th>
                  <div className="p-3   w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                   100
                  </div>
                </th>
                </tr>
                <tr className="text-center ">
                <th className="border-r-[1px]  w-[321px] h-[45px] bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                Total
                </th>
                <th className="border-r-[1px] w-[176px] h-[45px] bg-[#16376E] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[19.36px] tracking-[2%] capitalize">
               600
                </th>
                
                </tr>
                </table>
                </div>
        
            </form>
            </div>
    </>
  )
}

export default Results
