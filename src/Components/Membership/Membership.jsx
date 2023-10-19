import React from "react";
const Membership = ({ handleNextStep, handlePrevStep }) => {
  const [values, setValues] = React.useState({
    selectoption: "",
    organisation: "",
    type: "",
    role: "",
  });

  const { selectoption, organisation, type, role } = values;

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
            Membership in any Organisation
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
              id="selectoption"
              name="selectoption"
              value={selectoption}
              onChange={handleInputChange}
              //onBlur={validateOne}
              className="flex flex-row w-[128px] h-[40px]  bg-[#E6E6E6]   text-center  rounded-[5px] focus:outline-none text-[color:var(--02,#363636)] text-[18px] font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize"
            >
              <option selected>Sem - 1</option>
              <option value="sem2">Sem - 2</option>
              <option value="sem3">Sem - 3</option>
              <option value="sem4">Sem - 4</option>
              <option value="sem5">Sem - 5</option>
              <option value="sem6">Sem - 6</option>
              <option value="sem7">Sem - 7</option>
            </select>
            {/* <Nationaldropdown selected={selected} setSelected={setSelected} /> */}
            {/* INPUTS */}

            <div className="flex flex-row">
              <label
                for="caste"
                className="px-1  py-2 flex justify-start text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Name Of Organisation:{" "}
              </label>

              <input
                type="text"
                name="organisation"
                value={organisation}
                onChange={handleInputChange}
                //onBlur={validateOne}
                placeholder="Name Of Organisation"
                className="hover:border-[2px] hover:border-[#159BD6] w-[233px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                required
                tabindex="5"
              />
            </div>
            <div className="flex flex-row">
              <label
                for="type"
                className="px-1 flex justify-start  py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Type:{" "}
              </label>

              <input
                type="text"
                name="type"
                value={type}
                onChange={handleInputChange}
                //onBlur={validateOne}
                placeholder="Type"
                className="hover:border-[2px] hover:border-[#159BD6] w-[113px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                required
                tabindex="6"
              />
            </div>
            <div className="flex flex-row">
              <label
                for="weight"
                className="flex justify-start px-1 py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Role:{" "}
              </label>

              <input
                type="text"
                name="role"
                value={role}
                onChange={handleInputChange}
                //onBlur={validateOne}
                placeholder="Role"
                className="hover:border-[2px] hover:border-[#159BD6] w-[123px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                required
                tabindex="7"
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
          <div className="py-4">
            <table className=" ">
              <tr className="text-center ">
                <th className="border-r-[1px]  w-[176px] h-[45px] bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                  Sem
                </th>
                <th className="border-r-[1px] w-[321px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                  Name Of Organisation
                </th>
                <th className="border-r-[1px] w-[93px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                  Type
                </th>
                <th className="border-r-[1px] w-[166px] h-[45px] bg-[#159BD6] rounded-[0px_4px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                  Role
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
                    {organisation}
                  </div>
                </th>
                <th>
                  <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                    {type}
                  </div>
                </th>

                <th>
                  <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                    {role}
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

export default Membership;
