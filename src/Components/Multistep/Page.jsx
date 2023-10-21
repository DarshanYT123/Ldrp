import React from 'react';
import SimpleMultiStepForm from './SimpleMultiStepForm';

const Page = () => {
  return (
  <>
    <div className="pt-2 flex justify-end ">
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.28px] capitalize">Last Login</h2>
        <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px] capitalize px-3">2 :00 pM , Sunday 15 Oct 2023</h2>
      </div>
    <div className='py-2 max-w-full h-screen bg-[#F6F3F3] rounded-lg  p-4'>
      <SimpleMultiStepForm showStepNumber={true} />
    </div>
    </>
  );
};

export default Page;