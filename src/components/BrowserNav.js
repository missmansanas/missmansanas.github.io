import React from 'react';
import ThemeChanger from './ThemeChanger';
import MenuIcon from '@mui/icons-material/Menu';

const BrowserNav = ({ setTheme }) => {
  return (
    <div className="navbar bg-base-100/50 w-full">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <MenuIcon/>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100/90 rounded-box w-52">
          {/* <li><a href='/'>Homepage</a></li>
          <li><a href='/portfolio'>Portfolio</a></li>
          <li><a>About</a></li> */}
        </ul>
      </div>
    </div>
    <div className="navbar-center">
      <a className="btn btn-ghost normal-case text-xl">Miss Mansanas UI</a>
    </div>
    <div className="navbar-end">
      <ThemeChanger setTheme={setTheme} />
    </div>
  </div>
  )
}

export default BrowserNav