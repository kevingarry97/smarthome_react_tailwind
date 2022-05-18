import React from 'react';
import Dots from '../assets/images/dots.svg';

const ServiceSection = () => {
  return (  
    <section className='grid gap-12 sm:gap-16 md:gap-24 lg:gap-18 px-8 overflow-hidden'>
      <a href="#" className='py-2 px-6 bg-amber-400 dark:text-neutral-900 mx-auto my-12 flex gap-2 text-white shadow-xl hover:shadow-none transition-shadow focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-md ring-offset-4 ring-offset-amber-400'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        <span>Download the App</span>
      </a>
      <section className='relative'>
        <img src={Dots} className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-24 xl:-left-7" alt="" />
        <img src={Dots} className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-24 xl:-right-7" alt="" />
        <h2 className='sr-only'>Our Qualities</h2>
        <div className="container mx-auto max-w-5xl flex gap-12 flex-wrap items-start justify-center md:justify-between">
          <div className="grid gap-4 justify-items-center text-center md:flex-1">
            <div className='rounded-full border-4 border-amber-400 p-4'>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className='text-3xl font-bold'>Safe</h3>
            <p>Our products are secure and private out-of-the-box</p>
          </div>
          <div className="grid gap-4 justify-items-center text-center md:flex-1">
            <div className='rounded-full border-4 border-amber-400 p-4'>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className='text-3xl font-bold'>Efficient</h3>
            <p>Feel good about your wallet and the environment</p>
          </div>
          <div className="grid gap-4 justify-items-center text-center md:flex-1">
            <div className='rounded-full border-4 border-amber-400 p-4'>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className='text-3xl font-bold'>Proven</h3>
            <p>Leading the Smart Home world for 10 years</p>
          </div>
        </div>
      </section>
    </section>
  );
}
 
export default ServiceSection;
