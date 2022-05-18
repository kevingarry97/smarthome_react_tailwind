import React from 'react';
import Logo from '../assets/images/logo.svg'

const Navbar = () => {
  return (  
    <nav className='mx-auto p-4 bg-amber-400'>
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className='focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-9 z-4050 hover:opacity-75 transition-opacity'>
          <img src={Logo} width="120" className='w-48 md:w-54 lg:w-62' alt="" />
        </a>
        <button className='lg:hidden focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </button>
        <div role={"menubar"} className="hidden flex flex-col gap-4 absolute z-40 right-0 left-0 top-16 bg-amber-400 shadow-xl text-center text-lg p-6 items-center lg:flex lg:flex-row lg:static lg:shadow-none lg:justify-between lg:w-full">
          <a href="#" role={"menuitem"} className="py-1 px-6 dark:text-neutral-900 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors">Home</a>
          <a href="#" role={"menuitem"} className="py-1 px-6 dark:text-neutral-900 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors mr-auto">Contact</a>
          <a href="#" role={"menuitem"} className="py-1 px-6 dark:text-neutral-900 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors">Login</a>
          <a href="#" role={"menuitem"} className="py-1 px-6 bg-teal-900 text-white dark:text-neutral-900 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-xl hover:shadow-none transition-shadow ring-offset-4 ring-offset-amber-400 hover:text-neutral-600 transition-colors">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;
