import MoonFill from '../assets/Moon_fill.svg';
import MoonFillLight from '../assets/Moon_fill_light.svg';
import SunFillLight from '../assets/Sun_fill_light.svg'
import SunFill from '../assets/Sun_fill.svg';
import { useState } from 'react';

function ColorModeBtn({ switchTheme, theme }) {
    const [toggled, setToggled] = useState(false);
    function setMode() {
        setToggled(!toggled);
        const newTheme = theme === 'light' ? 'dark' : 'light';
        switchTheme(newTheme);
    }
    return (
        <button
            className={`toggle-btn ${toggled ? 'toggled' : ''} ${toggled ? 'bg-left' : 'bg-right'} bg-[#111729] bg-no-repeat rounded-full w-[60px] h-[28px] p-2 cursor-pointer shadow-md relative`}
            style={{ backgroundImage: `url(${toggled ? MoonFillLight : SunFillLight})` }}
            onClick={setMode}
        >
            <div
                className="thumb h-[24px] bg-white dark:bg-white rounded-full w-[24px] flex justify-center items-center bg-contain"
                style={{ backgroundImage: `url(${toggled ? SunFill : MoonFill})` }}
            >
            </div>
        </button>
    )
}

export default ColorModeBtn