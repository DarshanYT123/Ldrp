import React from "react";
const Seminar = ({ handleNextStep, handlePrevStep }) => {
  const [values, setValues] = React.useState({
    selectoption: "",
    activity: "",
    date: "",
    place: "",
  });

  const { selectoption, activity, date, place } = values;

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
      <div className="absolute top-32 right-0 pr-10  py-5 max-h-[700px]  overflow-y-auto   ">
        <div className="flex justify-center  items-center">
          <h2 className="text-[color:var(--02,#47A5E4)] text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">
            List the Seminar or Project you have Participated in
          </h2>
        </div>
        <div className=" pt-7 flex flex-row justify-between items-center">
          <div className="flex flex-row px-1 items-center">
            <div className="flex px-1">
              <h2
                className="    text-[color:var(--01,#159BD6)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize
"
              >
                {" "}
                Note:
              </h2>
            </div>
            <div className="flex ">
              <h2 className="text-[color:var(--01,#159BD6)] text-[14px] font-inter not-italic font-normal leading-[normal] tracking-[0.28px] capitalize">
                Please Fill all the details in{" "}
                <span className="text-[color:var(--01,#159BD6)] text-[14px] font-inter not-italic font-semibold leading-[normal] tracking-[0.28px] capitalize">
                  CAPITAL
                </span>{" "}
                Letters only
              </h2>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row gap-x-4 py-5">
            <select
              id="12th"
              name="selectoption"
              value={selectoption}
              onChange={handleInputChange}
              //onBlur={validateOne}
              tabIndex={1}
              className="flex flex-row w-[128px] h-[40px]  bg-[#E6E6E6]   text-center  rounded-[5px] focus:outline-none text-[color:var(--02,#363636)] text-[18px] font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize"
            >
              <option selected>12th</option>
              <option value="12th">12th</option>
              <option value="12th">12th</option>
              <option value="12th">12th</option>
            </select>

            {/* INPUTS */}

            <div className="flex flex-row">
              <label
                for="caste"
                className="px-1  py-2 flex justify-start text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Activity Name:{" "}
              </label>

              <input
                type="text"
                name="activity"
                value={activity}
                onChange={handleInputChange}
                //onBlur={validateOne}
                tabIndex={2}
                placeholder="Activity Name"
                className="hover:border-[2px] hover:border-[#159BD6] w-[243px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                required
               
              />
            </div>
            <div className="flex flex-row">
              <label
                for="date"
                className="px-1 flex justify-start  py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Date:{" "}
              </label>

              <input
                type="date"
                name="date"
                value={date}
                onChange={handleInputChange}
                //onBlur={validateOne}
                tabIndex={3}
                placeholder="DD/MM/YYYY"
                className="hover:border-[2px] hover:border-[#159BD6] w-[133px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                required
                
              />
            </div>
            <div className="flex flex-row">
              <label
                for="weight"
                className="flex justify-start px-1 py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Place:{" "}
              </label>

              <input
                type="text"
                name="place"
                value={place}
                onChange={handleInputChange}
                //onBlur={validateOne}
                placeholder="Place"
                className="hover:border-[2px] hover:border-[#159BD6] w-[143px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                required
                tabIndex={4}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button className="text-[color:var(--03,#FFF)] rounded-[5px] text-[16px] font-inter px-14 py-2 bg-[#159BD6] shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
              Add
            </button>
          </div>
        </form>

        {/* TABLE */}

        <div className=" py-2 ">
          {/* <div className="flex justify-end">
    <button className="text-[color:var(--03,#FFF)] rounded-[5px] text-[16px] font-inter px-14 py-2 bg-[#159BD6] shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Add</button>
</div> */}
          <div className="py-4">
            <table className=" ">
              <tr className="text-center ">
                <th className="border-r-[1px]  w-[176px] h-[45px] bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                  During
                </th>
                <th className="border-r-[1px] w-[321px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                  Name
                </th>
                <th className="border-r-[1px] w-[93px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                  Date
                </th>
                <th className="border-r-[1px] w-[166px] h-[45px] bg-[#159BD6] rounded-[0px_4px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                  Place
                </th>
              </tr>
              <tr className="">
                <th>
                  <div className=" p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                    {selectoption}
                  </div>
                </th>
                <th>
                  <div className="p-3 table-auto1 w-[379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                    {activity}
                  </div>
                </th>
                <th>
                  <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                    {date}
                  </div>
                </th>

                <th>
                  <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                    {place}
                  </div>
                </th>
              </tr>
              <tr className="">
                <th>
                  <div className=" p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
                <th>
                  <div className="p-3  w-[379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
                <th>
                  <div className="p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>

                <th>
                  <div className="p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
              </tr>
              <tr className="">
                <th>
                  <div className=" p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
                <th>
                  <div className="p-3 table-auto1 w-[379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
                <th>
                  <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>

                <th>
                  <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
              </tr>
              <tr className="">
                <th>
                  <div className=" p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
                <th>
                  <div className="p-3  w-[379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
                <th>
                  <div className="p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>

                <th>
                  <div className="p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
              </tr>
              <tr className="">
                <th>
                  <div className=" p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
                <th>
                  <div className="p-3 table-auto1 w-[379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
                <th>
                  <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>

                <th>
                  <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
              </tr>
              <tr className="">
                <th>
                  <div className=" p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
                <th>
                  <div className="p-3  w-[379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
                <th>
                  <div className="p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>

                <th>
                  <div className="p-3  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
              </tr>
              <tr className="">
                <th>
                  <div className=" p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
                <th>
                  <div className="p-3 table-auto1 w-[379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
                <th>
                  <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>

                <th>
                  <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"></div>
                </th>
              </tr>
            </table>
          </div>
        </div>

        {/* BUTTONS */}

        <div className="flex flex-row justify-center items-center gap-x-7">
          <button
            onClick={handleNextStep}
            className="px-10 py-2 shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] bg-[#159BD6] text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize"
          >
            Save & Next
          </button>
          <button
            onClick={handlePrevStep}
            className="border-[#159BD6] px-10 py-2 border-[1px] rounded-[5px] text-[color:var(--01,#159BD6)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default Seminar;
