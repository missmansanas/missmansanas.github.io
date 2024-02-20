import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import DesktopWindowsTwoToneIcon from '@mui/icons-material/DesktopWindowsTwoTone';
import AutoAwesomeTwoToneIcon from '@mui/icons-material/AutoAwesomeTwoTone';
import Face3TwoToneIcon from '@mui/icons-material/Face3TwoTone';
// import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import ThemeChanger from './ThemeChanger';

const DesktopNav = ({setTheme, theme}) => {

  const [open, setOpen] = useState(false);

  const mobileScreen = useMediaQuery(`(min-width: 768px)`);

  useEffect(()=>{
    if (mobileScreen) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [mobileScreen]);

  return (
    <div className="mockup-browser border bg-base-300/50 shadow-md
      h-auto w-full overflow-visible">

      {/* Browser Toolbar */}
      <div className="mockup-browser-toolbar flex flex-row-reverse justify-between items-center pl-4" onClick={() => setOpen(!open)}>
        <span className="text-sm flex items-center gap-2">
          <MapOutlinedIcon fontSize='small' color='light'/> Explorer
        </span>
      </div>
      
      <ul tabIndex={0} className={open? "grid grid-cols-6 md:grid-cols-4 p-5 gap-y-6 place-content-center rounded-b-xl bg-base-200/50 w-full" : "hidden"}>
          <li className='text-center'>
            <Link to='/'><DesktopWindowsTwoToneIcon style={theme !== "black" ? {fontSize: "2rem", color: "hsl(var(--p))"} : {fontSize: "2rem", color: "hsl(var(--pc))"}} /></Link>
            <p className='text-xs pt-2'>Home</p>
          </li>
          <li className='text-center'>
            <Link to='/portfolio'><AutoAwesomeTwoToneIcon style={theme !== "black" ? {fontSize: "2rem", color: "hsl(var(--p))"} : {fontSize: "2rem", color: "hsl(var(--pc))"}} /></Link>
            <p className='text-xs pt-2'>Portfolio</p>
          </li>
          <li className='text-center'>
            <Link to='/about'><Face3TwoToneIcon style={theme !== "black" ? {fontSize: "2rem", color: "hsl(var(--p))"} : {fontSize: "2rem", color: "hsl(var(--pc))"}} /></Link>
            <p className='text-xs pt-2'>About</p>
          </li>
          {/* <li className='text-center'>
            <Link to='#'><LockTwoToneIcon style={theme !== "black" ? {fontSize: "2rem", color: "hsl(var(--p))"} : {fontSize: "2rem", color: "hsl(var(--pc))"}} /></Link>
            <p className='text-xs pt-2'>Coming Soon</p>
          </li>
          <li className='text-center'>
            <Link to='#'><LockTwoToneIcon style={theme !== "black" ? {fontSize: "2rem", color: "hsl(var(--p))"} : {fontSize: "2rem", color: "hsl(var(--pc))"}} /></Link>
            <p className='text-xs pt-2'>Coming Soon</p>
          </li> */}
          <li className='text-center'>
            <ThemeChanger setTheme={setTheme} theme={theme} />
          </li>

        </ul>

    </div>
  )
}

export default DesktopNav