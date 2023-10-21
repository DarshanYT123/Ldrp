import React, { useState } from "react";
import TabNavItem from "../TabNavItem/TabNavItem";
import TabContent from "../TabContent/TabContent";
import Maths from "./Maths";
import BEEE from "./BEEE";

const Attendance = ({handleNextStep}) => {
    const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
      <div className="absolute top-8 right-0  px-[3.5rem]  py-5 max-h-[700px]  overflow-y-auto bg-white  ">
        <div className="flex justify-center  items-center ">
          <h2 className="text-[color:var(--02,#47A5E4)] py-2 text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">
            Attendance Details
          </h2>
        </div>
        <div className="flex flex-col">
        <ul className="flex flex-row items-center justify-between shadow-[inset_0px_1px_5px_rgba(0,0,0,0.25)] rounded-sm overflow-hidden ">
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
