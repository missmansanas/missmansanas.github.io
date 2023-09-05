import React from 'react';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';

const ThemeChanger = ({ setTheme, theme }) => {

  return (
    <div className="dropdown dropdown-left dropdown-end">
      <label tabIndex={0} className="text-center hover:cursor-pointer">
        <PaletteOutlinedIcon style={theme !== "black" ? {fontSize: "3rem", color: "hsl(var(--p))"} : {fontSize: "3rem", color: "hsl(var(--pc))"}}/>
        <p className='text-xs pt-1'>Theme</p>
      </label>
      <ul tabIndex={0} className="dropdown-content z-[999] menu p-2 shadow-xl bg-base-100/95 rounded-box w-52 border">
        <li><a onClick={() => setTheme('autumn')}>🌕 Apple Reds</a></li>
        <li><a onClick={() => setTheme('fantasy')}>🌕 Ghibli Core</a></li>
        <li><a onClick={() => setTheme('lofi')}>🌓 Mojo Dojo</a></li>
        <li><a onClick={() => setTheme('black')}>🌑 Just Black </a></li>
        <li><a onClick={() => setTheme('dracula')}>🌑 00s Girlie</a></li>
      </ul>
    </div>
  )
}

export default ThemeChanger