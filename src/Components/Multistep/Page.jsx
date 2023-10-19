import React from 'react';
import SimpleMultiStepForm from './SimpleMultiStepForm';

const Page = () => {
  return (
    <div className='py-2 max-w-full max-h-[10rem]  rounded-lg mx-4 p-4'>
      <SimpleMultiStepForm showStepNumber={true} />
    </div>
  );
};

export default Page;