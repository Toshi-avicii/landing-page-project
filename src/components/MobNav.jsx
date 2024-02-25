import { useState } from "react";
import Logo from '../assets/alarado-icon-homepage.svg';
import MoonFill from '../assets/Moon_fill.svg';
import MoonFillLight from '../assets/Moon_fill_light.svg';
import SunFillLight from '../assets/Sun_fill_light.svg'
import SunFill from '../assets/Sun_fill.svg';
import ColorModeBtn from "./ColorModeBtn";

function MobNav({ isNavOpen, switchTheme, theme }) {
  const [toggled, setToggled] = useState(false);
  return (
    <div className={`fixed w-[60%] left-0 top-0 h-full ${isNavOpen ? 'translate-x-0' : '-translate-x-full' } transition-transform bg-[#2A4DD0] shadow-md`}>
        <div className="logo flex items-center my-6">
            <img src={Logo} alt="logo" />
        </div>
        <nav className='my-5'>
            <ul className='flex flex-col space-y-4'>
                <li className='font-[500] px-4 py-2 cursor-pointer text-white'>About Us</li>
                <li className='font-[500] px-4 py-2 cursor-pointer text-white'>Product</li>
                <li className='font-[500] px-4 py-2 cursor-pointer text-white'>Resources</li>
                <li className='font-[500] px-4 py-2 cursor-pointer text-white'>Contact</li>
            </ul>
        </nav>
        <div className='p-2'>
            <ColorModeBtn switchTheme={switchTheme} theme={theme} />
        </div>
    </div>
  )
}

export default MobNav