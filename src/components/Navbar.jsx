import { useState } from 'react';
import Logo from '../assets/alarado-icon-homepage.svg';

import { FaBars } from 'react-icons/fa6';
import MobNav from './MobNav';
import ColorModeBtn from './ColorModeBtn';

function Navbar({ switchTheme, theme }) {
 
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  return (
    <header className='w-full py-6 flex items-center justify-between'>
        <div>
            <img src={Logo} alt="logo" />
        </div>
        <nav className='hidden lg:block'>
            <ul className='flex space-x-6 items-center'>
                <li className='font-[500] cursor-pointer text-[#909193] hover:text-[#111729] hover:dark:text-[#2A4DD0] dark:text-white'>About Us</li>
                <li className='font-[500] cursor-pointer text-[#909193] hover:text-[#111729] hover:dark:text-[#2A4DD0]'>Product</li>
                <li className='font-[500] cursor-pointer text-[#909193] hover:text-[#111729] hover:dark:text-[#2A4DD0]'>Resources</li>
                <li className='font-[500] cursor-pointer text-[#909193] hover:text-[#111729] hover:dark:text-[#2A4DD0]'>Contact</li>
            </ul>
        </nav>
        <div className='hidden lg:block'>
            <ColorModeBtn switchTheme={switchTheme} theme={theme} />
        </div>
        <div className='lg:hidden'>
            <button className='flex justify-center items-center cursor-pointer' onClick={() => setIsNavOpen(!isNavOpen)}>
                <FaBars />
            </button>
        </div>
        <MobNav isNavOpen={isNavOpen} switchTheme={switchTheme} theme={theme} />
    </header>
  )
}

export default Navbar