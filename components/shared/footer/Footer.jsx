import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-[#1f2c55] text-primary-content p-10">
  <aside>
    <h2 className='text-7xl font-bold my-4'>Book Vibe</h2>
    <p className="font-regular text-[16px] text-gray-400">
     Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
    </p>
    <p className="font-regular text-[16px] text-gray-300 mt-2">Social Links</p>
    
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a className='w-10 h-10 rounded-full bg-white flex items-center justify-center text-black'>
        <FaInstagram  className='w-5 h-5'/>
      </a>
      <a className='w-10 h-10 rounded-full bg-white flex items-center justify-center text-black'>
       <FaFacebook  className='w-5 h-5'/>
      </a>
      <a className='w-10 h-10 rounded-full bg-white flex items-center justify-center text-black'>
        <FaXTwitter  className='w-5 h-5'/>
      </a>


    </div>
  </nav>
  <div className="flex justify-between items-center w-full mt-4">
    <div className='font-regular text-[16px] text-gray-400 '>

    <p>© {new Date().getFullYear()} KeenKeeper. All right reserved.</p>
    </div>
    <nav className='grid-flow-col gap-4 items-center justify-between hidden md:flex'>
        <a className='font-regular text-[16px] text-gray-400'>Privacy Policy</a>
        <a className='font-regular text-[16px] text-gray-400'>Terms of Service</a>
        <a className='font-regular text-[16px] text-gray-400'>Cookies </a>
    </nav>
  </div>
</footer>
    );
};

export default Footer;