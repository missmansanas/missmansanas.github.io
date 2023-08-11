import React from 'react'

const ThemeChanger = ({ setTheme }) => {

  return (
    <div className="dropdown dropdown-hover">
      <label tabIndex={0} className="btn m-1">Change Theme</label>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-xl bg-base-100 rounded-box w-52 border">
        <li><a onClick={() => setTheme('autumn')}>🌞 Apple Reds</a></li>
        <li><a onClick={() => setTheme('pastel')}>🌞 Pinterest Girl</a></li>
        <li><a onClick={() => setTheme('bumblebee')}>🌞 Sunny Day</a></li>
        <li><a onClick={() => setTheme('fantasy')}>🌞 Fantasy</a></li>
        <li><a onClick={() => setTheme('lofi')}>🌞 Mojo Dojo</a></li>
        <li><a onClick={() => setTheme('luxury')}>🌚 Luxury Black</a></li>
        <li><a onClick={() => setTheme('dracula')}>🌚 2000s Emo</a></li>
        <li><a onClick={() => setTheme('black')}>🌚 Just Black </a></li>
      </ul>
    </div>
  )
}

export default ThemeChanger