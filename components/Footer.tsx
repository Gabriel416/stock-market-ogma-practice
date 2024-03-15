import React from 'react';
import { Activity } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className='bg-white shadow dark:bg-gray-900'>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <a href='/' className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'>
            <Activity className='h-6 w-6' />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              S&P 500 Viewer
            </span>
          </a>
          <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
            <li>
              <a href='mailto:gferguson954@gmail.com' className='hover:underline'>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          ©{new Date().getFullYear()}{' '}
          <a href='mailto:gferguson954@gmail.com' className='hover:underline'>
            Gabriel Ferguson
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};