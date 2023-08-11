import React from 'react';
import PaletteIcon from '@mui/icons-material/Palette';

const ThemeChanger = ({ setTheme }) => {

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost m-1">
        <PaletteIcon/>
      </label>
      <ul tabIndex={0} className="dropdown-content z-[999] menu p-2 shadow-xl bg-base-100/90 rounded-box w-52 border">
        <li><a onClick={() => setTheme('autumn')}>🌞 Apple Reds</a></li>
        <li><a onClick={() => setTheme('bumblebee')}>🌞 Sunny Day</a></li>
        <li><a onClick={() => setTheme('fantasy')}>🌞 Fantasy</a></li>
        <li><a onClick={() => setTheme('lofi')}>🌞 Mojo Dojo</a></li>
        <li><a onClick={() => setTheme('black')}>🌚 Just Black </a></li>
        <li><a onClick={() => setTheme('luxury')}>🌚 Luxury Black</a></li>
        <li><a onClick={() => setTheme('dracula')}>🌚 00s Girlie</a></li>
      </ul>
    </div>
  )
}

export default ThemeChanger