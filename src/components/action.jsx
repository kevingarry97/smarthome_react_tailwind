import React from 'react'
import Table from '../assets/images/table.png';

const ActionSection = () => {
  return (  
    <section aria-labelledby="home" class="relative">
    <div class="flex flex-wrap-reverse gap-8 justify-center">
      <div class="flex gap-6 flex-wrap flex-col items-start lg:justify-center">
        <div class="flex flex-wrap flex-col items-start gap-2">
          <h2 class="text-4xl font-bold">Relax, you’re home!</h2>
          <p class="max-w-md">All our supported hardware includes traditional inputs so you can integrate our products into your house in a way that’s
          best for everyone.</p>
        </div>
        <a href="#" 
          class="
            py-2
            px-6
            bg-amber-400
            dark:text-neutral-900
            flex
            gap-2
            shadow-xl
            hover:shadow-none
            transition-shadow
            focus:outline-none
            focus-visible:ring-4
            ring-neutral-900
            rounded-md
            ring-offset-4
            ring-offset-white
            dark:ring-amber-400
            dark:ring-offset-neutral-800
        ">
          Sign Up
        </a>
      </div>
      <img src={Table} alt="Table" />
    </div>
    <div 
      class="
        absolute
        -bottom-6
        -right-32
        -z-10
        aspect-square
        md:border-8
        border-amber-400
        rounded-full
        md:w-64
        lg:w-96
        xl:max-w-lg
    "></div>
    <div 
      class="
      absolute
        bg-teal-900
        h-24
        xl:h-48
        -mx-8 
        mt-12
        xl:mt-0
        xl:absolute
        w-full
        -bottom-8
        -z-10
    "></div>
  </section>
  );
}
 
export default ActionSection;
