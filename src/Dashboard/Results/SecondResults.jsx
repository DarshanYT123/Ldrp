import React from 'react'

const SecondResults = () => {
  return (
   <>
   <div className='absolute top-40 left-[5rem]  px-14  py-5 max-h-[700px]  overflow-y-auto bg-white'>
    
    <div className="flex justify-center  items-center ">
      <h2 className="text-[color:var(--02,#47A5E4)] text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">
      Results Details
      </h2>
    </div>

    <form>
          <div className="flex flex-row gap-x-[5rem] py-5 px-10 items-center justify-center">

            <div>
            <button type="button" class="text-white text-[16px]    bg-[#159BD6] rounded-[5px]  font-bold px-14 py-2 mr-2 mb-2 leading-[19.36px] tracking-[2%] capitalize">Upload Result Copy</button>
            </div>
            <div className="flex">
            <label
                  for=" Examination"
                  className="ml-[20px] px-1  py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
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
              className="flex flex-row w-[128px] h-[40px]  bg-[#E6E6E6]   text-center  rounded-[5px] focus:outline-none text-[color:var(--02,#363636)] text-[18px] font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize"
            >
              <option selected>Final</option>
              <option value="Final">Final</option>
              <option value="Final">Final</option>
            
            </select>
            </div>


            <div className="flex">
            <label
                  for=" Examination"
                  className="ml-[20px] px-1  py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
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
              className="flex flex-row w-[128px] h-[40px]  bg-[#E6E6E6]   text-center  rounded-[5px] focus:outline-none text-[color:var(--02,#363636)] text-[18px] font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize"
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
            </form>
   </div>
   </>
  )
}

export default SecondResults