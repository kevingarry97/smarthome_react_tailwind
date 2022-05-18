import React from 'react';
import Partner1 from '../assets/images/partner1.svg';
import Partner2 from '../assets/images/partner2.svg';
import Partner3 from '../assets/images/partner3.svg';
import Partner4 from '../assets/images/partner4.svg';
import Partner5 from '../assets/images/partner5.svg';
import Partner6 from '../assets/images/partner6.svg';

const PartnerSection = () => {
  return (  
    <div className='text-center grid gap-8 place-items-center mt-24'>
      <div className="grid gap-4">
        <h2 className='text-4xl font-bold text-amber-400'>Our Partners</h2>
        <p className='w-full max-w-lg'>
          We've partnered with hundreds of smart home brands to help you create a smart home that fits your needs and doesn't lock you in.
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-x-16 max-w-2xl mx-auto">
          <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
            <img src={Partner1} alt="" className='h-16 w-16' />
          </div>
          <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
            <img src={Partner2} alt="" className='h-16 w-16' />
          </div>
          <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
            <img src={Partner3} alt="" className='h-16 w-16' />
          </div>
          <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
            <img src={Partner4} alt="" className='h-16 w-16' />
          </div>
          <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
            <img src={Partner5} alt="" className='h-16 w-16' />
          </div>
          <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
            <img src={Partner6} alt="" className='h-16 w-16' />
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default PartnerSection;
