import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import DesktopWindowsTwoToneIcon from '@mui/icons-material/DesktopWindowsTwoTone';
import AutoAwesomeTwoToneIcon from '@mui/icons-material/AutoAwesomeTwoTone';
import Face3TwoToneIcon from '@mui/icons-material/Face3TwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';

const DesktopNav = () => {

  const [open, setOpen] = useState(false);

  const mobileScreen = useMediaQuery(`(min-width: 768px)`);

  useEffect(()=>{
    if (mobileScreen) {
      setOpen(true)
    }
  }, [mobileScreen]);

  return (
    <div className="mockup-browser border bg-base-300/50 shadow-md
      h-auto
      w-full">

      {/* Browser Toolbar */}
      <div className="mockup-browser-toolbar flex flex-row-reverse justify-between items-center pl-4" onClick={() => setOpen(!open)}>
        <span className="text-sm flex items-center gap-2">
          <MapOutlinedIcon fontSize='small' color='light'/> Explorer
        </span>
      </div>
      
      <ul tabIndex={0} className={open? "grid grid-cols-3 py-7 gap-y-6 place-content-center bg-base-200/50 w-full" : "hidden"}>
          <li className='text-center'>
            <Link to='/'><DesktopWindowsTwoToneIcon style={{fontSize: "3rem", color: "hsl(var(--p))"}} /></Link>
            <p className='text-xs pt-1'>Home</p>
          </li>
          <li className='text-center'>
            <Link to='/portfolio'><AutoAwesomeTwoToneIcon style={{fontSize: "3rem", color: "hsl(var(--p))"}} /></Link>
            <p className='text-xs pt-1'>Portfolio</p>
          </li>
          <li className='text-center'>
            <Link to='/about'><Face3TwoToneIcon style={{fontSize: "3rem", color: "hsl(var(--p))"}} /></Link>
            <p className='text-xs pt-1'>About</p>
          </li>
          <li className='text-center'>
            <Link to='#'><LockTwoToneIcon style={{fontSize: "3rem", color: "hsl(var(--p))"}} /></Link>
            <p className='text-xs pt-1'>Locked</p>
          </li>
          <li className='text-center'>
            <Link to='#'><LockTwoToneIcon style={{fontSize: "3rem", color: "hsl(var(--p))"}} /></Link>
            <p className='text-xs pt-1'>Locked</p>
          </li>

        </ul>

    </div>
  )
}

export default DesktopNav