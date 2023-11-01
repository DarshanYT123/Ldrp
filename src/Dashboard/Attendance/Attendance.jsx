import React, { useState } from "react";
import TabNavItem from "../TabNavItem/TabNavItem";
import TabContent from "../TabContent/TabContent";
import Maths from "./Maths";
import BEEE from "./BEEE";

const Attendance = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const [curr,setCurr] = useState(0)
    const handleprev = (id) =>{
        setCurr((curr) => (curr === 0 ? id.length - 1 : curr - 1) )
    }
    const handlenext = (id) =>{
      setCurr((curr) => (curr ===  id.length - 1 ? 0 : curr + 1) )
      
    }

  return (
    <>
      <div className="absolute top-[7rem] right-0  px-[2rem]  pt-5 max-h-[700px]  overflow-y-auto bg-white  ">
        <div className="flex justify-center  items-center ">
          <h2 className="text-[color:var(--02,#47A5E4)] py-2 text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">
            Attendance Details
          </h2>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-x-0.5 py-3">
          <button className="bg-[#16376E] w-10 rounded-[3px_0px_0px_3px]" onClick={handleprev} >
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
  <path d="M22.4443 10.7916L13.2393 18.5L22.4443 26.2083L22.4443 10.7916Z" fill="white"/>
</svg></button>
        <ul className="flex flex-row items-center justify-between bg-[#F5F5F5] shadow-[0px_4px_12px_0px_rgba(157,157,157,0.18)_inset] rounded-[3px] overflow-hidden ">
        <TabNavItem
          title="Maths"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="BEEE"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="FME"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="EG"
          id="tab4"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Civil Engineering"
          id="tab5"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Engineering Physics"
          id="tab6"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
      <button className="bg-white rounded-[3px_0px_0px_3px] w-10 shadow-[0px_4px_12px_0px_rgba(157,157,157,0.18)_inset]" onClick={handlenext} ><svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
  <path d="M15.5557 10.7916L24.7607 18.5L15.5557 26.2083L15.5557 10.7916Z" fill="#16376E"/>
</svg></button>
</div>
      <div className="">
        <TabContent id="tab1" activeTab={activeTab}>
        <Maths />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <BEEE/>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
        </TabContent>
        <TabContent id="tab4" activeTab={activeTab}>
        
        </TabContent>
        <TabContent id="tab5" activeTab={activeTab}>
        </TabContent>
        <TabContent id="tab6" activeTab={activeTab}>
        </TabContent>
      </div>
      </div>
      </div>
    </>
  );
};

export default Attendance;
