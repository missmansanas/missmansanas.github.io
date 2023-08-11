import React from 'react'

const ThemeChanger = ({ setTheme }) => {

  return (
    <div className="dropdown dropdown-hover">
      <label tabIndex={0} className="btn m-1">Change Theme</label>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-xl bg-base-100 rounded-box w-52 border">
        <li><a onClick={() => setTheme('autumn')}>Default 🌞</a></li>
        <li><a onClick={() => setTheme('pastel')}>Pastel 🌞</a></li>
        <li><a onClick={() => setTheme('bumblebee')}>Bumblebee 🌞</a></li>
        <li><a onClick={() => setTheme('fantasy')}>Fantasy 🌞</a></li>
        <li><a onClick={() => setTheme('lofi')}>Lofi 🌞</a></li>
        <li><a onClick={() => setTheme('luxury')}>Luxury 🌚</a></li>
        <li><a onClick={() => setTheme('dracula')}>Dracula 🌚</a></li>
        <li><a onClick={() => setTheme('black')}>Black 🌚</a></li>
{/*         
        <li onClick={() => setTheme('bumblebee')} value='bumblebee'>Warm Light</li>
        <li onClick={() => setTheme('fantasy')} value='fantasy'>Cool Light</li>
        <li onClick={() => setTheme('lofi')} value='lofi'>Monochrome Light</li>
        <li onClick={() => setTheme('luxury')} value='luxury'>Cool Dark</li>
        <li onClick={() => setTheme('dracula')} value='dracula'>Warm Dark</li>
        <li onClick={() => setTheme('black')} value='black'>All Black</li>
        <li onClick={() => setTheme('pastel')} value='pastel'>Pastel</li> */}
      </ul>
    </div>
  )
}

export default ThemeChanger