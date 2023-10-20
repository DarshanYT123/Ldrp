import React from 'react';
import SimpleMultiStepForm from './SimpleMultiStepForm';

const Page = () => {
  return (
    <div className='py-2 max-w-full h-screen bg-[#F6F3F3] rounded-lg  p-4'>
      <SimpleMultiStepForm showStepNumber={true} />
    </div>
  );
};

export default Page;